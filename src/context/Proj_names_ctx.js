import React, { createContext, useState, useContext, useEffect } from 'react';
import AuthContext from './AuthContext';
import api from '../utils/Api';
import { isTokenExpired } from '../utils/checkTokenExpiry';

const processProjObj = (proj_obj) => {
    return {
        id: proj_obj.id,
        project: proj_obj.prodName,
        value: `KSH ${proj_obj.prodValue / 1000000} M`,
        clients: proj_obj.clientDtos.length
    }
};
const projname_n_id = (proj_obj) => {
    return {
        id: proj_obj.id,
        project: proj_obj.project,
    }
};
const fetchProjects = async (auth_state) => {
    if (isTokenExpired(auth_state.expiry)) {
        return;
    }
    else {
        const response = await api('http://localhost:8080/api/projects/all', {
            method: 'GET',
            token: auth_state.token,
        });
        if (typeof response != 'undefined') {
            const proj_objs = response.data.projects.map((proj) => processProjObj(proj));
            return (proj_objs)
        }
    }
};
const client_obj = (client) => {
    return {
        id: client.id,
        name: client.name,
        email: client.email,
        phone: client.phone,
    }
};
const process_clients = (proj_obj) => {
    return {
        id: proj_obj.id,
        clients: proj_obj.clientDtos.map((client) => client_obj(client)),
    }
};
const fetchClients = async (auth_state) => {
    if (auth_state === null) {
        return;
    }
    if (!isTokenExpired(auth_state.expiry)) {
        const response = await api('http://localhost:8080/api/projects/all', {
            method: 'GET',
            token: auth_state.token,
        });
        return (response.data.projects.map((proj) => process_clients(proj)));
    }
}

const ProjnamesContext = createContext();
export const ProjnamesProvider = ({ children }) => {
    const authState = useContext(AuthContext);
    const [projnames_list, setProjnames_list] = useState([]);

    useEffect(() => {
        fetchProjects(authState.authState).then((projects) => {
            if (typeof projects != "undefined") {
                setProjnames_list(projects.map((proj) => projname_n_id(proj)))
            }
        })
    }, [authState.authState]);
    return (
      <ProjnamesContext.Provider value={{ projnames_list, setProjnames_list }}>
        {children}
      </ProjnamesContext.Provider>
    );
};
export const useProjnames = () => useContext(ProjnamesContext);

const ProjslistContext = createContext();
export const ProjslistProvider = ({ children }) => {
    const authState = useContext(AuthContext);
    const [projs_list, setProjs_list] = useState([]);

    useEffect(() => {
        fetchProjects(authState.authState).then((projects) => {
            if (typeof projects != "undefined") {
                setProjs_list(projects)
            }
        })
    }, [authState.authState])
    return (
        <ProjslistContext.Provider value={{ projs_list, setProjs_list }}>
            {children}
        </ProjslistContext.Provider>
    )
}
export const useProjslist = () => useContext(ProjslistContext)

const ClientsContext = createContext();
export const ClientsProvider = ({ children }) => {
    const authState = useContext(AuthContext);
    const [clients_list, setClients_list] = useState([]);

    useEffect(() => {
        fetchClients(authState.authState).then((clients) => {
            if (typeof clients != "undefined") {
                setClients_list(clients)
            }
        })
    }, [authState.authState])
    return (
        <ClientsContext.Provider value={{ clients_list, setClients_list }}>
            {children}
        </ClientsContext.Provider>
    )
};
export const useClients = () => useContext(ClientsContext);

const ActiveProjContext = createContext();
export const ActiveProjProvider = ({ children }) => {
    const [active_proj_id, setActive_proj_id] = useState(0);
    return (
        <ActiveProjContext.Provider value={{active_proj_id, setActive_proj_id}}>
            {children}
        </ActiveProjContext.Provider>
    )
}
export const useActiveProjId = () => useContext(ActiveProjContext);