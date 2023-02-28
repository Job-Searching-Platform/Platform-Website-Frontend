import http from "./backend-link";

class Request {
  // Authentication
  signup(path, data) {
    return http.post(`/api/v1/${path}/signup`, data);
  }
  login(path, data) {
    return http.post(`/api/v1/${path}/login`, data);
  }
  logout(path) {
    return http.get(`/api/v1/${path}/logout`);
  }
  forgotPassword(path) {
    return http.get(`/api/v1/${path}/forgotPassword`);
  }
  resetPassword(path) {
    return http.get(`/api/v1/${path}/resetPassword/:token`);
  }
  googleLogin(path, data) {
    return http.post(`/api/v1/${path}/google-login`, data);
  }
  facebookLogin(path, data) {
    return http.post(`/api/v1/${path}/facebook-login`, data);
  }

  //     ######  Education, Experience, Profile   ########
  getEduExperienceProfile(path, section, id) {
    return http.get(`/api/v1/${path}/${section}/${id}`);
  }
  createEduExperienceProfile(path, section, data) {
    return http.post(`/api/v1/${path}/${section}`, data);
  }
  deleteEduExperienceProfile(path, section, id) {
    return http.delete(`/api/v1/${path}/${section}/${id}`);
  }
  editEduExperienceProfile(path, section, id, data) {
    return http.patch(`/api/v1/${path}/${section}/${id}`, data);
  }

  // ######    JOB & Company  (recruiter)  ########
  createRecruiterJobCompany(route, data) {
    return http.post(`/api/v1/${route}/create-${route}`, data);
  }
  getRecruiterJobCompany(route, data) {
    return http.post(`/api/v1/${route}/all`, data);
  }
  getJobCompany(route, id) {
    return http.get(`/api/v1/${route}/detail/${id}`);
  }
  deleteRecruiterJobCompany(route, id) {
    return http.delete(`/api/v1/${route}/detail/${id}`);
  }
  editRecruiterJobCompany(route, id, data) {
    return http.patch(`/api/v1/${route}/detail/${id}`, data);
  }

  // #############################################
  //             Apply Job & Applicants for Job
  // ##############################################
  createApplyJob(id) {
    return http.post(`/api/v1/candidates/${id}/apply`);
  }
  getAppliedJobs(id) {
    return http.get(`/api/v1/candidates/${id}/applied-jobs`);
  }

  getApplicants(id) {
    return http.get(`/api/v1/job/${id}/applicants`);
  }

  uploadAWS(route, dataType) {
    return http.get(`/api/v1/upload/${route}/${dataType}`);
  }
}

export default new Request();
