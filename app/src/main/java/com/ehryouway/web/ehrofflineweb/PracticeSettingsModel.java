package com.ehryouway.web.ehrofflineweb;

/**
 * Created by Mahesh.Paruchuri on 8/20/2016.
 */
public class PracticeSettingsModel {

    public int EMRPracticePortalID ;

    // IF LOOGED PRACTICE IS CONFIGURED TO SEND HL7 LAB ORDERS ELECTRONICALLY TO QUEST LAB THEN GET WHICH BUSINESS UNIT THAT PRACTICE IS BELONGS TO
    public int QuestBusinessUnitsUsingForLoggedPractice ;

    public int PracticeType ;


    /// <summary>
    /// THIS IS USEFUL IN HOLDING THE SESSION INACTIVITY MINS FOR THE PRACTICE USER
    /// </summary>
    public int SessionInactivityTimeInMins ;

    /// <summary>
    /// THIS IS USEFUL IN MAINTAINING THE IS DEBUG MODE ENABLED OR NOT
    /// </summary>
    public Boolean IsDebugModeEnabled ;
}
