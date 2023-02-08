public with sharing class accountTable {
    @AuraEnabled
    public static List<account> allAccounts(string ratingValue)
    {
        if(!String.isBlank(ratingValue)){
            return [select Id,Name,Phone,Rating from Account where Rating=:ratingValue];
        } else {
            //string key = ratingValue;
            return [select Id,Name,Phone,Rating from Account where Rating IN ('Hot','Warm','Cold','')];
        }
        
    }
    
}
