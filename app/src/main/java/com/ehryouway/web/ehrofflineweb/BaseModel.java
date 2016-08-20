package com.ehryouway.web.ehrofflineweb;

/**
 * Created by Mahesh.Paruchuri on 8/20/2016.
 */

public class BaseModel extends EMRWebExceptionTraceLogModel {
/// <summary>
//Maintain the value while executing the Sp.1--Already Exists,0--SuccessfullyInsert,-1--error.
/// </summary>
public int RequestExecutionStatus;

/// <summary>
//Maintain the errorID while executing the Sp.
/// </summary>
public int ErrorID;

/// <summary>
//Maintain error message while executing the Sp.
/// </summary>
public String ErrorMessage;

public Boolean  IsConfirmationRequired;

public PracticeModel practicemodel;

public String PracticeData;

public String inputObjectJSON;

public String exceptionJSON;

public String exceptionLog;

public String exceptionSystemName;

public String exceptionDateAndTime;

public String exceptionStackTrace;

public String clientIPAddress;

public EMRWebExceptionTraceLogModel emrwebexceptiontracelogmodel;


}

