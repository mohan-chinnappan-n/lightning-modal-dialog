({
  hideModalOpptyAddDlg: function(component, event, helper) {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("newOpptySection").style.display = "none";
  },

  saveNewOppty: function(component, event, helper) {

    var action = component.get("c.addOppty");
    action.setParams({
      "newOppty": component.get("v.newOppty")
    });

    action.setCallback(this, function(a) {
      if (a.getState() === "SUCCESS") {
        document.getElementById("backdrop").style.display = "none";
        document.getElementById("newOpptySection").style.display = "none";
      } else if (a.getState() === "ERROR") {
        $A.log("Errors", a.getError());
      }
    });

    $A.enqueueAction(action);
  }
})
