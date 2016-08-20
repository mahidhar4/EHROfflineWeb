package com.ehryouway.web.ehrofflineweb;

/**
 * Created by Mahesh.Paruchuri on 8/20/2016.
 */
public class EMRUrlsModel
{


    /// <summary>
    /// THIS IS USED FOR HOLDING THE SURESCRIPT URL FOR SENDING THE ERX
    /// </summary>
    public String EMRSureScript_ERxWebServiceURL;

    /// <summary>
    /// THIS IS USED FOR HOLDING THE SURESCRIPT URL FOR SENDING THE ERX
    /// </summary>
    public String EMRSureScriptERxSecondaryWebServiceURL;

    /// <summary>
    /// THIS IS USED FOR HOLDING THE SURESCRIPT URL RELATED TO THE CLINICAL MESSAGING
    /// </summary>
    public String EMRSureScriptClinicalMessageWebServiceURL;

    /// <summary>
    /// THIS IS USED FOR HOLDING THE SURESCRIPT DIRECTORY SERVICES INFORMATION
    /// </summary>
    public String EMRSureScriptDirectoryWebServiceURL;

    public String EMRSureScriptMedHxWebServiceURL;

    public String EMRSureScriptMedHxSecondaryWebServiceURL;

    /// <summary>
    /// THIS IS USED TO HOLD THE Primary WEBSERVER CONNECTING URL INFORMATION FROM WHICH WE CAN GET THE DRUGS AND THE INTERACTIONS INFORMATION 
    /// </summary>
    public String EmrMedispanDataBaseConnetcingPrimaryServerUrl;

    /// <summary>
    /// THIS IS USED TO HOLD THE Secondary WEBSERVER CONNECTING URL INFORMATION FROM WHICH WE CAN GET THE DRUGS AND THE INTERACTIONS INFORMATION 
    /// </summary>
    public String EmrMedispanDataBaseConnetcingSecondaryServerUrl;


    /// <summary>
    /// THIS IS SENDEROR MAIL
    /// </summary>
    public String SENDERRORMAIL;

    /// <summary>
    /// THIS IS FOR SENDING THE MESSAGES FROM THE EMR
    /// </summary>
    public String SENDMESSAGESFROMEMR;

    /// <summary>
    /// THIS IS PORTAL URL INFORMATION
    /// </summary>
    public String PATIENTPORTAL;

    /// <summary>
    /// THIS IS FOR EMRERGENCY MGMT URL INFORMATION
    /// </summary>
    public String EMERGENCYMGMT_IMPORTNOTES;

    /// <summary>
    /// THIS IS FOR UP LOADING THE EMERGENCY MGMT FILES SERVICE URL INFORMATION
    /// </summary>
    public String UPLOADEMERGENCYMGMTFILES;

    /// <summary>
    /// THIS IS USED FOR ACCESSING THE EMR APPLICATION SERVICE URL INFORMATION
    /// </summary>
    public String TERMINALSERVICE;

    /// <summary>
    /// THIS IS FOR DB SERVER INFORMATION SERVICE URL INFORMATION
    /// </summary>
    public String GETDBSERVERINFO;

    /// <summary>
    /// THIS IS USED TO HOLD THE PRIMARY URL OF THE EMR WEB
    /// </summary>
    public String PrimaryEMRWebURL;

    /// <summary>
    /// THIS IS USED TO HOLD THE SECONDARY URL OF THE EMR WEB
    /// </summary>
    public String SecondaryEMRWebURL;

    /// <summary>
    /// THIS IS USED TO HOLD THE PRIMARY URL FOR THE SERVICE CENTRALIZER.
    /// </summary>
    public String EMRServicesCentralizerPrimaryURL;

    /// <summary>
    /// THIS IS USED TO HOLD THE SECONDARY URL FOR THE SERVICE CENTRALIZER.
    /// </summary>
    public String EMRServicesCentralizerSecondaryURL;

    /// <summary>
    /// THIS IS USED TO HOLD THE PRIMARY URL FOR THE SERVICE CENTRALIZER.
    /// </summary>
    public String EMRServicesCentralizerURL;


    /// <summary>
    /// this is used to hold the primary url of teh app server centralizer
    /// </summary>
    public String EMRAppServerCentralizerPrimaryURL;


    /// <summary>
    /// this is used to hold the secondary url of teh app server centralizer
    /// </summary>
    public String EMRAppServerCentralizerSecondaryURL;

    /// <summary>
    /// this is usef to hold the wcf primary external url's to made the rquesets
    /// </summary>
    public String EMRWebWCFPrimaryExternalURL;

    /// <summary>
    /// this is usef to hold the wcf seconadary external url's to made the rquesets
    /// </summary>
    public String EMRWebWCFSecondaryExternalURL;


    public String EmgWebURLPrimary;

    public String EmgWebURLSecondary;

    public String EmgWebWCFExternalPrimary;

    public String EmgWebWCFExternalSecondary;


    public String EMRCentralizerSocketPrimaryURL;

    public String EMRCentralizerSocketSecondaryURL;

   
}
