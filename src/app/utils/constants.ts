export class Constants {

    //Integration
  public static API_ENDPOINT = 'https://tesisenterate.herokuapp.com/';
  //public static API_ENDPOINT = 'http://localhost:8086/';

  public static API_FILE_ENDPOINT = '/rsu_upload_files-0.0.1-SNAPSHOT/fileservice/uploadFile';
  public static FILE_DIRECTORY = 'Eventos';
  public static FILE_API_NAME = 'ENTERATE_UNIAJC';
  public static FILE_MSG_ERROR = 'No se pudo cargar la imagen ingresada, por favor comuniquese con el administrador.';

  //Configuración
  public static ROLADMIN = 3;
  public static ROLSTATISTICS = 4;

    //Events
  public static EVENTS_ENDPOINT = 'events/'
  public static REQUESTS_ENDPOINT = 'request'
  public static GET_EVENTS_NOTFOUND = 'No se encontraron eventos.';
  public static CAMPUS_ENDPOINT = 'campus';
  public static CONFIGURATION_ENDPOINT = 'configuration';
  public static PROGRAMS_ENDPOINT = 'program/';

    //Users
    public static USERS_ENDPOINT = 'users/'
    public static VALIDATE_USER_ENDPOINT = 'validateUser'
    public static AUTHENTICATE_USER_ENDPOINT = 'authenticateUser'
    public static RECOVERYPASSWORD_USER_ENDPOINT = 'recoveryAccess'
    public static AUTHENTICATE_USER_ROLNOTFOUND = 'EL usuario no tiene permisos para entrar a la aplicación.'

    //User Form
  public static TXTUSER = "Usuario academusoft";
  public static TXTPASSWORD = "Contraseña";
  public static VALIDATE_USERNAME = "El usuario es requerido.";
  public static VALIDATE_PASSWORD = "La contraseña es requerida.";
  public static BUTTON_LOGIN = "Continuar";
  public static BUTTON_CANCEL = "Cancelar";
  public static BUTTON_PASSWORD = "Ingresar";
  public static TXTRECOVERY = "Olvidé mi contraseña";
  public static BUTTON_RECOVERY = "Restablecer Contraseña";
  public static CANCEL_RECOVERY = "Ya la recuerdas, volver a iniciar sesión.";


  //Login Form
  public static MENU_EVENTS = 'Eventos';
  public static MENU_REQUEST = 'Solicitudes';
  public static MENU_NOTIFICATIONS = 'Notificaciones';
  public static MENU_STATISTICS = 'Estadisticas';

//request Form
  public static GET_REQUEST_NOTFOUND = 'No se encontraron solicitudes pendientes.';
  public static BUTTON_RECHAZAR = 'Rechazar';
  public static BUTTON_ACEPTAR = 'Aceptar';

  //Create Event Form
  public static BUTTON_CREATE = 'Crear Evento';
  public static BUTTON_FILE = 'Seleccionar Imagen';
  public static TXTVALIDATENAMECREATEVENT = 'El nombre del evento es obligatorio';
  public static TXTVALIDATEDESCRIPTIONCREATEVENT = 'La descripción del evento es obligatoria';
  public static TXTVALIDATEDATECREATEVENT = 'La fecha de inicio es obligatoria';
  public static TXTVALIDATEHSTARTCREATEVENT = 'La hora de inicio es obligatorio';
  public static TXTVALIDATEHENDCREATEVENT = 'La hora de finalziación es obligatorio';
  public static TXTVALIDATECATEGORYCREATEVENT = 'La categoria es obligatoria';
  public static TXTVALIDATEESTATEMENTCREATEVENT = 'El estamento es obligatorio';
  public static TXTVALIDATELOCATIONCREATEVENT = 'La ubicación es obligatoria';
  public static TXTVALIDATEASISTCREATEVENT = 'La cantidad de asistentes es obligatoria';
  public static TXTVALIDATEIMGCREATEVENT = 'La imagen es obligatoria';
  public static TXTNAMECREATEEVENT = 'Nombre Evento';
  public static TXTDESCRIPTIONCREATEEVENT = 'Descripción del Evento';
  public static TXTDATECREATEEVENT = 'Fecha de Inicio';
  public static TXTDATECREATEEVENTEND = 'Fecha de Finalización';
  public static TXTHSTARTCREATEEVENT = 'Hora de Inicio';
  public static TXTHENDCREATEEVENT = 'Hora de Finalización';
  public static TXTCATEGORYCREATEEVENT = 'Categoria';
  public static TXTESTATEMENTCREATEEVENT = 'Estamento';
  public static TXTLOCATIONCREATEEVENT = 'Ubicación';
  public static TXTASISTCREATEEVENT = 'Asistentes';
  public static TXTIMGCREATEEVENT = 'Imagenes';
  public static TXTJORNALYCREATEEVENT = 'Jornada';
  public static TXTFACULTYCREATEEVENT = 'Facultad';
  public static TXTPROGRAMCREATEEVENT = 'Programa';
  public static CREATEVENT_TITLE = 'Creación de Eventos';
  public static IMG_CREATEEVENT_NAME = 'assets/nombre_de_evento.png';
  public static IMG_CREATEEVENT_DESCRIPTION = 'assets/descripcion_evento.png';
  public static IMG_CREATEEVENT_DATE = 'assets/fecha_de_inicio.png';
  public static IMG_CREATEEVENT_HSTART = 'assets/hora_de_inicio.png';
  public static IMG_CREATEEVENT_HEND = 'assets/hora_de_finalizacion.png';
  public static IMG_CREATEEVENT_CATEGORY = 'assets/categoria.png';
  public static IMG_CREATEEVENT_ESTATEMENT = 'assets/estamento.png';
  public static IMG_CREATEEVENT_LOCATION = 'assets/ubicacion.png';
  public static IMG_CREATEEVENT_ASIST = 'assets/asistentes.png';
  public static IMG_CREATEEVENT_IMG = 'assets/imagenes.png';
  public static IMG_CREATEEVENT_FACULTY = 'assets/facultad.png';
  public static IMG_CREATEEVENT_JORNALY = 'assets/jornada.png';
  public static IMG_CREATEEVENT_PROGRAM = 'assets/programa.png';
  public static INVALID_STATUS = 'Por favor ingrese todos los campos requeridos para poder continuar.';

  //Statistics
  public static BUTTON_SEARCH = 'Buscar';
  public static BUTTON_CLEAR = 'Borrar Filtro';
  public static BUTTON_DOWNLOAD = 'Descargar';
  public static STATISTICS_ENDPOINT = 'statistics/';
  public static SATISFACTIONLEVEL_ENDPOINT = 'satisfactionLevel/';
  public static ALLGENDER_ENDPOINT = 'genderAssistants/';
  public static CANT_ASSIST_ENDPOINT = 'allAssistants/';
  public static CANTS_EVENTS_ENDPOINT = 'allEvents/';
  public static ALL_AGE_ENDPOINT = 'ageAssistants/';
  public static TITLE_SATISFACTION = 'Nivel de satisfacción';
  public static TITLE_CANTEVENTS = 'Eventos por fecha';
  public static TITLE_CANTASSIS = 'Participación en los eventos';
  public static TITLE_ALLGENDER = 'Genero de participantes';
  public static TITLE_AGE = 'Edad por quinquenios';
  public static DESCRIPTION_SATISFACTION = 'Esta gráfica muestra el nivel de satisfacción de los asistentes a los eventos';
  public static DESCRIPTION_CANTEVENTS = 'Esta gráfica muestra la cantidad de eventos realizados en cada mes';
  public static DESCRIPTION_CANTASSIS = 'Esta gráfica muestra lel resultado de los registros.';
  public static DESCRIPTION_ALLGENDER = 'Esta gráfica muestra el número de particpantes por genero';
  public static DESCRIPTION_AGE = 'Esta gráfica muestra la edad de los participantes por quinquenio';
  public static MES_1 = 'Enero';
  public static MES_2 = 'Febrero';
  public static MES_3 = 'Marzo';
  public static MES_4 = 'Abril';
  public static MES_5 = 'Mayo';
  public static MES_6 = 'Junio';
  public static MES_7 = 'Julio';
  public static MES_8 = 'Agosto';
  public static MES_9 = 'Septiembre';
  public static MES_10 = 'Octubre';
  public static MES_11 = 'Noviembre';
  public static MES_12 = 'Diciembre';
  public static QUINQUENIO1 = '1 - 5 años';
  public static QUINQUENIO2 = '6 - 10 años';
  public static QUINQUENIO3 = '11 - 15 años';
  public static QUINQUENIO4 = '16 - 20 años';
  public static QUINQUENIO5 = '21 - 25 años';
  public static QUINQUENIO6 = '26 - 30 años';
  public static QUINQUENIO7 = '31 - 35 años';
  public static QUINQUENIO8 = '36 - 40 años';
  public static QUINQUENIO9 = '41 - 45 años';
  public static QUINQUENIO10 = '46 - 50 años';
  public static QUINQUENIO11 = '51 - 55 años';
  public static QUINQUENIO12 = '56 - 60 años';
  public static QUINQUENIO13 = '61 - 65 años';
  public static QUINQUENIO14 = '66 - 70 años';
  public static QUINQUENIO15 = '71 - 75 años';
  public static QUINQUENIO16 = '76 - 80 años';
  public static QUINQUENIO17 = '81 o mas años';


  //Logo Camacho
  public static TXTLOGOUNIAJCBIENVENIDO = 'Bienvenido';
  public static TXTLOGOUNIAJC = '#UniCamacho';


}
