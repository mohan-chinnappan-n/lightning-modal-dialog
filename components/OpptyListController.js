({
    getOpportunityList: function(component, event, helper) {
        var action = component.get("c.getOpptyList");

        action.setCallback(this, function(a) {
            if (a.getState() === "SUCCESS") {
                component.set("v.opptyList", a.getReturnValue());
            } else if (a.getState() === "ERROR") {
                $A.log("Errors", a.getError());
            }
        });

        $A.enqueueAction(action);
    },


    deleteOpportunity: function(component, event, helper) {
        var id = event.target.id;

        var action = component.get("c.deleteOppty");
        action.setParams({ "id": id });

        action.setCallback(this, function(a) {
            if (a.getState() === "SUCCESS") {
                alert("DELETED Id :" + id);
            } else if (a.getState() === "ERROR") {
                $A.log("Errors", a.getError());
            }
        });

        $A.enqueueAction(action);

    }
})
