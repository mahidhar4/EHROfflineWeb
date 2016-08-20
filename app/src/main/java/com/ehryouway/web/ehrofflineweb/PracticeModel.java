package com.ehryouway.web.ehrofflineweb;

/**
 * Created by Mahesh.Paruchuri on 8/20/2016.
 */
public class PracticeModel {
/// <summary>
/// Output data member used to hold name of DBServer
/// </summary>
public String DBServerName ;

/// <summary>
/// Output data member used to hold Practice Id 
/// </summary>
public int PracticeID ;

/// <summary>
/// Output data member used to hold Practice Name
/// </summary>
public String PracticeName ;

/// <summary>
/// Input/Output data member used to hold Logged User Id
/// </summary>
public int LoggedUserID ;

/// <summary>
///Output data member used to hold Logged User Id
/// </summary>
public String LoggedUserName ;

/// <summary>
/// Input/Output data member used to hold LOGGED FACILITY ID
/// </summary>
public int LoggedFacilityID ;

/// <summary>
/// Input/Output data member used to hold LOGGED FACILITY NAME
/// </summary>
public String LoggedFacilityName ;

//************BELOW OBJECTS IS USED TO MAINTAIN THE VALUES AFETER EXECUTION OF THE SP BLOCK STARTS***************      
/// <summary>
///To maintain the First Name of the User while login into the application.
/// </summary>
public String FirstName ;

/// <summary>
///To maintain the Last Name of the User while login into the application.
/// </summary>
public String LastName ;

/// <summary>
///To maintain the Middle Initial of the user while login into the application.
/// </summary>
public String MiddleInitial ;

/// <summary>
///To maintain the Title of the user while login into the application.
/// </summary>
public String Title ;

/// <summary>
///To maintain the User type while login into the application.
///UserType = 1 Indicates Physician
///Usertype = 0 Indicates Non Physician
/// </summary>
public int UserType ;

/// <summary>
/// THIS PROPERTY IS USED TO HOLD THE PORTAL USER TYPE.
/// </summary>
public int PortalUserType ;

public EMRUrlsModel emrurlsmodel ;

public PracticeSettingsModel practicesettingsmodel ;

/// <summary>
/// THIS IS USED TO MAINTAIN THE EMERGENCY DBSERVER NAME 
/// </summary>
public String EmergencyDBServerName ;

/// <summary>
/// To Maintain the Type of Application Loaded
/// ApplicationType = 1 ==> For EMR Windows and Web
/// ApplicationType = 2 ==> For EMR PORTAL
/// ApplicationType = 3 ==> FOR EMR SIGNATURE PAD
/// </summary>
public int ApplicationType ;

public int RelationshipPersonID ;

public int PersonRelationshipIdColumn ;

public String OldPassword ;

/// <summary>
/// THIS IS USED TO HOLD THE CURRENT LOGGED IN CLIENT IP ADDRESS
/// </summary>
public String clientIP ;

/// <summary>
///     THIS IS USED TO HOLD THE CLIENT SYSTEM LOCAL IP ADDRESS
/// </summary>
public String clientSystemLocalIP ;

/// <summary>
/// THIS IS USEFUL IN HOLDING THE EMPLOYEE ID OF THE CURRENT LOGGED USER IN THE EHR APPLICATION
/// </summary>
public int EmployeeId ;

/// <summary>
/// THIS PROPERTY IS USED TO IDENTIFY WHETHER THE WEBSITE IS EMERGENCY WEBSITE OR NOT
/// </summary>
public Boolean isEmergencyWeb ;


/// <summary>
/// THIS PROPERTY IS USED TO HOLD THE EASY FORMS COMMON JS FILE NAME
/// </summary>
public String EHREasyFormsCommonJSFileName ;

/// <summary>
/// VARIABE USED TO HOLD STREET1 AND STREET2 (STREET1, STREET2)
/// </summary>
public String AddressLine ;

/// <summary>
/// VARIABLE USED TO HOLD PRACTICE STREET1 
/// </summary>
public String Street1 ;

/// <summary>
/// VARIABLE USED TO HOLD PRACTICE STREET2
/// </summary>
public String Street2 ;

/// <summary>
/// VARIABLE USED TO HOLD PRACTICE CITY
/// </summary>
public String City ;

/// <summary>
/// VARIABLE USED TO HOLD PRACTICE STATE
/// </summary>
public String State ;

/// <summary>
/// VARIABLE USED TO HOLD PRACTICE ZIP CODE
/// </summary>
public String Zip ;

/// <summary>
/// VARIABLE USED TO HOLD PRACTICE TELEPHONE
/// </summary>
public String Telephone ;

/// <summary>
/// MMISID USED IN HTML INSIGHT PLUS CCDA XML GENERATION
/// </summary>
public String MMISID ;

/// <summary>
/// USED TO HOLD PRACTICE GROUP NPI
/// </summary>
public String GroupNPI ;

/// <summary>
/// THIS PROPERTY IS USED TO HOLD THE CALL CENTER DBSERVER NAME TO ACCESS THE EMR_CALLCENTER DATABASE FROM DIFERRENT SERVERS
/// </summary>
public String CallCenterDBServerName ;

/// <summary>
///THIS IS USED TO DIFFERENTIATE THE USER SESSIONS 
/// </summary>
public String EHRSessionID ;

/// <summary>
/// THIS IS USED TO HOLD THE LOGGED PORTAL USER NAME
/// </summary>
public String PortalUserName ;

/// <summary>
/// THIS PROPERTY IS USED TO IDENTIFY WHETHER THE WEBSITE IS EMERGENCY WEBSITE OR NOT AND TO IDENTIFY THAT THE CURRENT DATA BASE NEED TO CONNECT IS READ MODE OR WRITE MODE        /// 
/// </summary>
public Boolean isEmergencyWebWriteMode ;

}