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

  // User Profile
  getMe(path, id) {
    return http.get(`/api/v1/${path}/me/${id}`);
  }
  editMe(path, id) {
    return http.patch(`/api/v1/${path}/me/${id}`);
  }

  // User Education, Experience, Profile
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
}

export default new Request();
