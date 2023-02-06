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
  googleLogin(path) {
    return http.get(`/api/v1/${path}/google-login`);
  }
  facebookLogin(path) {
    return http.get(`/api/v1/${path}/facebook-login`);
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
  getRecruiterJobCompany(route, id) {
    return http.get(`/api/v1/recruiters/${route}/${id}`);
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
}

export default new Request();
