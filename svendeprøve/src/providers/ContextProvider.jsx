import { useEffect, useState, createContext, useContext } from 'react';
import { useSupabase } from './supabaseProvider';
import PropTypes from 'prop-types';


const EmployeeContext = createContext();

export const ContextProvider = ({ children }) => {

    const supabase = useSupabase();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            let { data: employees, error } = await supabase
                .from('employees')
                .select('*');

            if (error) console.log('error', error);

            setEmployees(employees);
        };

        fetchEmployees();
    }, [supabase]);

    return (
        <EmployeeContext.Provider value={employees}>
            {children}
        </EmployeeContext.Provider>
    );
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useEmployees = () => {
    return useContext(EmployeeContext);
};

