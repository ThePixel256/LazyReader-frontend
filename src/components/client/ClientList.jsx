import { getAllClients } from '../../api/ClientRequest';
import { ClientCard } from './ClientCard';
import { useState, useEffect } from 'react';

export function ClientList() {
    
    const [clients, setClients] = useState([]);

    useEffect(() => {
        async function loadClients() {
            const res = await getAllClients();
            console.log(res);
            setClients(res.data);
        }
        loadClients();
    }, []);

    return (
        <div>
            {clients.map((client) => (
                <ClientCard key={client._id} client={client} />
            ))}
        </div>
    );
}
