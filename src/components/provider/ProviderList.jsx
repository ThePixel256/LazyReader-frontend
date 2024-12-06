import { getAllProviders } from '../../api/ProviderRequest';
import { ProviderCard } from './ProviderCard';
import { useState, useEffect } from 'react';

export function ProviderList() {
    
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        async function loadProviders() {
            const res = await getAllProviders();
            console.log(res);
            setProviders(res.data);
        }
        loadProviders();
    }, []);

    return (
        <div>
            {providers.map((provider) => (
                <ProviderCard key={provider._id} provider={provider} />
            ))}
        </div>
    );
}
