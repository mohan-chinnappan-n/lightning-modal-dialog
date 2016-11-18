public with sharing class OpportunityListController {

        @AuraEnabled
        public static List<Opportunity> getOpptyList(){
            return [SELECT
                     Id,
                      Name,
                      Probability,
                      TotalOpportunityQuantity,
                      StageName,
                      CloseDate
                     FROM Opportunity
                     ORDER BY CreatedDate DESC
                     LIMIT 10
                   ];

        }

        @AuraEnabled
        public static void addOppty(Opportunity newOppty){
            //Date closeDate = Date.newInstance(2017, 1, 2);
            //newOppty.CloseDate = closeDate;
            insert newOppty ;
        }

        @AuraEnabled
        public static void deleteOppty(String id){
            Opportunity delOppty = [SELECT Id, Name FROM Opportunity WHERE Id = :id ];
            delete delOppty ;
        }

}
