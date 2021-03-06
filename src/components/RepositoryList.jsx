import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";


export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/sudjoao/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map((repository, index) => (
                    <RepositoryItem repository={repository} key={index}/>
                ))}
            </ul>
        </section>
    );
}