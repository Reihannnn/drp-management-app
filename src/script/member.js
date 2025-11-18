// member.js - Script untuk Member Management

// Load data member saat halaman dibuka
window.addEventListener("DOMContentLoaded", () => {
  loadMembers();
  initFormHandler();
  initSearchHandler();
});

// Function untuk load semua member
async function loadMembers() {
  try {
    console.log("Loading members...");
    const members = await window.api.getMember();
    console.log("Members data:", members);
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
    alert("Gagal memuat data member!");
  }
}

// Function untuk display member ke table
function displayMembers(members) {
  const tableBody = document.getElementById("memberTable");

  if (!members || members.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="px-6 py-8 text-center text-gray-500">
          <i class="fas fa-inbox text-4xl mb-2 block"></i>
          <p>Belum ada data member</p>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = members
    .map(
      (member) => `
    <tr class="hover:bg-gray-50 transition">
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ${member.id}
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-blue-600 font-semibold">${member.nama.charAt(0).toUpperCase()}</span>
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">${member.nama}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 text-sm text-gray-700">
        ${member.alamat || "-"}
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getCategoryClass(
          member.category
        )}">
          ${member.category}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        ${formatDate(member.date)}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        ${member.no_telp || "-"}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button 
          onclick="editMember(${member.id})" 
          class="text-blue-600 hover:text-blue-900 mr-3 transition"
          title="Edit"
        >
          <i class="fas fa-edit"></i>
        </button>
        <button 
          onclick="deleteMember(${member.id}, '${member.nama}')" 
          class="text-red-600 hover:text-red-900 transition"
          title="Hapus"
        >
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  `
    )
    .join("");
}

// Function untuk format tanggal
function formatDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("id-ID", options);
}

// Function untuk styling kategori
function getCategoryClass(category) {
  switch (category) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "Non Active":
      return "bg-red-100 text-red-800";
    case "Harian":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

// Handle form submit untuk tambah member
function initFormHandler() {
  const form = document.getElementById("formAddMember");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const memberData = {
      nama: document.getElementById("nama").value,
      alamat: document.getElementById("alamat").value,
      date: document.getElementById("date").value,
      category: document.getElementById("category").value,
      no_telp: document.getElementById("no_telp").value,
    };

    try {
      await window.api.addMember(memberData);
      alert("Member berhasil ditambahkan!");
      form.reset();
      loadMembers(); // Reload data
    } catch (error) {
      console.error("Error adding member:", error);
      alert("Gagal menambahkan member!");
    }
  });
}

// Function untuk delete member
async function deleteMember(id, nama) {
  if (confirm(`Apakah Anda yakin ingin menghapus member "${nama}"?`)) {
    try {
      await window.api.deleteMember(id);
      alert("Member berhasil dihapus!");
      loadMembers(); // Reload data
    } catch (error) {
      console.error("Error deleting member:", error);
      alert("Gagal menghapus member!");
    }
  }
}

// Function untuk edit member (bisa dikembangkan dengan modal)
function editMember(id) {
  alert(`Fitur edit untuk member ID ${id} sedang dalam pengembangan`);
  // TODO: Implement edit functionality dengan modal atau form
}

// Search functionality
function initSearchHandler() {
  const searchInput = document.querySelector('input[placeholder="Cari member..."]');
  if (!searchInput) return;

  searchInput.addEventListener("input", async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const members = await window.api.getMember();
    
    const filtered = members.filter(
      (member) =>
        member.nama.toLowerCase().includes(searchTerm) ||
        member.category.toLowerCase().includes(searchTerm) ||
        (member.alamat && member.alamat.toLowerCase().includes(searchTerm))
    );
    
    displayMembers(filtered);
  });
}