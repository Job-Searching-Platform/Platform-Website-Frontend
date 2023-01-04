import http from "./backend-link";

class Yellowspace {
  login(data) {
    return http.post("admin/login", data);
  }
  logout() {
    return http.get("admin/logout");
  }
  getResearch(page = 0, limit = 6) {
    return http.get(`research?page=${page}&limit=${limit}`);
  }
  filterResearch(term, field, limit) {
    return http.get(
      `research/filter?text=${term}&route=searchResearches&field=${field}&limit=${limit}`
    );
  }

  deleteResearch(id) {
    return http.delete(`research/${id}`);
  }
  patchResearch(id, data) {
    return http.patch(`research/${id}`, data);
  }
  authorResearch(author) {
    return http.get(
      `research/filter?text=${author}&route=searchResearches&field=producer&limit=3`
    );
  }
  postResearch(data) {
    return http.post(`research`, data);
  }

  getNews(page = 0, limit = 6) {
    return http.get(`news?page=${page}&limit=${limit}`);
  }
  filterNews(term, field, limit) {
    return http.get(
      `news/filter?text=${term}&route=searchNews&field=${field}&limit=${limit}`
    );
  }

  deleteNews(id) {
    return http.delete(`news/${id}`);
  }
  patchNews(id, data) {
    return http.patch(`news/${id}`, data);
  }
  authorNews(author) {
    return http.get(
      `news/filter?text=${author}&route=searchNews&field=producer&limit=3`
    );
  }
  postNews(data) {
    return http.post(`news`, data);
  }

  getGallery(page = 0, limit = 3) {
    return http.get(`photo?page=${page}&limit=${limit}`);
  }
  searchGallery(searchTerm = null) {
    return http.get(`photo?text[search]=${searchTerm}`);
  }
  filterGallery(term, field, limit) {
    return http.get(
      `photo/filter?text=${term}&route=searchPhotos&field=${field}&limit=${limit}`
    );
  }
  deleteGallery(id) {
    return http.delete(`photo/${id}`);
  }
  patchGallery(id, data) {
    return http.patch(`photo/${id}`, data);
  }
  authorGallery(author) {
    return http.get(
      `photo/filter?text=${author}&route=searchPhotos&field=producer&limit=3`
    );
  }
  postGallery(data) {
    return http.post(`photo`, data);
  }

  getPodcast(page = 0, limit = 3) {
    return http.get(`podcast?page=${page}&limit=${limit}`);
  }
  searchPodcast(searchTerm = null) {
    return http.get(`podcast?text[search]=${searchTerm}`);
  }
  filterPodcast(term, field, limit) {
    return http.get(
      `podcast/filter?text=${term}&route=searchPodcasts&field=${field}&limit=${limit}`
    );
  }
  deletePodcast(id) {
    return http.delete(`podcast/${id}`);
  }
  patchPodcast(id, data) {
    return http.patch(`podcast/${id}`, data);
  }
  authorPodcast(author) {
    return http.get(
      `podcast/filter?text=${author}&route=searchPodcasts&field=producer&limit=3`
    );
  }
  postPodcast(data) {
    return http.post(`podcast`, data);
  }

  getVideo(page = 0, limit = 3) {
    return http.get(`video?page=${page}&limit=${limit}`);
  }
  searchVideo(searchTerm = null) {
    return http.get(`video?text[search]=${searchTerm}`);
  }
  filterVideo(term, field, limit) {
    return http.get(
      `video/filter?text=${term}&route=searchVideos&field=${field}&limit=${limit}`
    );
  }
  deleteVideo(id) {
    return http.delete(`video/${id}`);
  }
  patchVideo(id, data) {
    return http.patch(`video/${id}`, data);
  }
  authorVideo(author) {
    return http.get(
      `video/filter?text=${author}&route=searchVideos&field=producer&limit=3`
    );
  }
  postVideo(data) {
    return http.post(`video`, data);
  }

  getAnnouncement(page = 0, limit = 1) {
    return http.get(`announcement?page=${page}&limit=${limit}`);
  }
  deleteAnnouncement(id) {
    return http.delete(`announcement/${id}`);
  }
  patchAnnouncement(id, data) {
    return http.patch(`announcement/${id}`, data);
  }
  postAnnouncement(data) {
    return http.post(`announcement`, data);
  }
  AWS_Link(route = "news") {
    return http.get(`aws/${route}`);
  }
  searchFilter({ link, term, route, limit, field }) {
    return http.get(
      `${link}/filter?text=${term}&route=${route}&field=${field}&limit=${limit}`
    );
  }
}

export default new Yellowspace();