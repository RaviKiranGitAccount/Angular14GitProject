import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../employees.models/employee.model';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl : string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllEmployees() : Observable<Employee[]>
  {
     return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employees' );
  }

  addEmployee(addEmployeeRequest: Employee)
  {
    addEmployeeRequest.id='0D3714D5-B046-4675-8109-51A433822369';
   return this.http.post<Employee>(this.baseApiUrl + '/api/Employees',addEmployeeRequest );
  }
  getEmployee(id : string) : Observable<Employee>
  {
     return this.http.get<Employee>(this.baseApiUrl + '/api/Employees/'+ id );
  }
  updateEmployee(id : string ,updateEmployeeRequest: Employee): Observable<Employee>
  {
   return this.http.put<Employee>(this.baseApiUrl + '/api/Employees/'+id,updateEmployeeRequest);
  }
  deleteEmployee(id : string): Observable<Employee>
  {
   return this.http.delete<Employee>(this.baseApiUrl + '/api/Employees/'+id);
  }
}
