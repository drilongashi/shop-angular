import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rootUrl = 'api/v1/users/';

  constructor(private http: HttpClient) {
  }

  registerUser(data) {
    return this.http.post(this.rootUrl , data);
  }

  getAllUsers() {
    return this.http.get(this.rootUrl );
  }


  deleteUser(id) {
    return this.http.delete(this.rootUrl + id);
  }


  updateUser(data, id) {
    return this.http.put(this.rootUrl + id, data);
  }


}
