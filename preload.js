const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  // EXIT APP
  exitApp: () => ipcRenderer.send("app:exit"),

  // MEMBER
  addMember : (data) => ipcRenderer.send("member:add", data),
  getMember : () => ipcRenderer.invoke("member:list"),
  updateMember: (data) => ipcRenderer.invoke("member:update", data),
  deleteMember: (id) => ipcRenderer.invoke("member:delete", id),

  // MEMBERSHIP
  addMembership: (data) => ipcRenderer.invoke("membership:add", data),
  listMembershipByMember: (id) =>
    ipcRenderer.invoke("membership:listByMember", id),
  updateMembership: (data) =>
    ipcRenderer.invoke("membership:update", data),
  deleteMembership: (id) =>
    ipcRenderer.invoke("membership:delete", id),

  // INCOME 
  listIncome: () => ipcRenderer.invoke("income:list"),
});


