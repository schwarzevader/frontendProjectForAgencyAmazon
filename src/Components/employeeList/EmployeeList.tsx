import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import "./EmployeeList.css"


export function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageCount, setPageCount] = useState(1); // Set an initial value for pageCount

    const fetchEmployees = async (page: number) => {
        try {
            const response = await axios.get(`http://localhost:8080/all/${page}`);
            setEmployees(response.data);
            // Assuming the backend returns total pages or total count
            const totalCount = response.headers['x-total-count'];
            const itemsPerPage = 10; // Assuming 10 items per page
            setPageCount(Math.ceil(totalCount / itemsPerPage));
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    useEffect(() => {
        fetchEmployees(pageNumber);
    }, [pageNumber]);

    const handlePageClick = (data: { selected: number }) => {
        setPageNumber(data.selected);
    };

    return (
        <div>
            <h1>Employee List</h1>

            <div className='employee-card-group' >
                {/*<div className="row row-cols-1 row-cols-md-4 g-4" >*/}
                {employees.map((employee: { id: number, name: string, mail: string, phoneNumber: string }) => (

                        <div className='cardEmployee' key={employee.id}>
                            <h5 className="card-title">{employee.name}</h5>
                            {/*<h6 className="card-subtitle mb-2 text-body-secondary">{employee.id}</h6>*/}
                            <p className="card-text">{employee.mail}</p>
                            <p className="card-text">{employee.phoneNumber}</p>

                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>


                ))}
            </div>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}


