export class Users {

    academusoftId: String;
    age: number;
    campusId: number;
    cellPhone: String;
    document: String;
    documentType: String;
    estamentId: number;
    stateId: number;
    facultyId: number;
    gender: String;
    id: number;
    jornalyId: number;
    lastName: String;
    login: String;
    mail: String;
    name: String;
    password: String;
    programId: String;
    rolId: number;
    semester: number;
    tokenAcademusoft: number;

  constructor(users) {
        this.academusoftId = users != null ? users.academusoftId : '';
        this.age = users != null ? users.age : 0;
        this.campusId = users != null ? users.campusId : 0;
        this.cellPhone = users != null ? users.cellPhone : '';
        this.document = users != null ? users.document : '';
        this.documentType = users != null ? users.documentType : '';
        this.estamentId = users != null ? users.estamentId : 0;
        this.stateId = users != null ? users.stateId : 0;
        this.facultyId = users != null ? users.facultyId : 0;
        this.gender = users != null ? users.gender : '';
        this.id = users != null ? users.id : 0;
        this.jornalyId = users != null ? users.jornalyId : 0;
        this.lastName = users != null ? users.lastName : '';
        this.login = users != null ? users.login : '';
        this.mail = users != null ? users.mail : '';
        this.name = users != null ? users.name : '';
        this.password = users != null ? users.password : '';
        this.programId = users != null ? users.programId : '';
        this.rolId = users != null ? users.rolId : 0;
        this.semester = users != null ? users.semester : 0;
        this.tokenAcademusoft = users != null ? users.tokenAcademusoft : '';
  }


}
