import React, {useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import {FiLogIn } from 'react-icons/fi';
import './styles.css';

import herosImg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';
    export default function Logon(){
        const [id, setId] = useState('');
        const history = useHistory();

           async function handleLogin(e){
                    e.preventDefault();

                    try{
                        const response = await api.post('sessions', {id});
                            localStorage.setItem('ongId', id);
                            localStorage.setItem('ongName',response.data.name);

                            history.push('/profile');

                    }catch(err){
                            alert('Falha no Login, tente novamente.');
                    }
            }

        return(
            <div className="Logon-container">
                    <section className="form">
                        <img src={logoimg} alt="Be The Hero"/>
                        <form onSubmit={handleLogin}>
                            <h1>
                                Faça seu Logon
                            </h1>
                            <input placeholder="Sua ID"
                                value={id}
                                onChange={e => setId(e.target.value)}
                            />
                            <button className="button" type="submit">Entrar</button>

                            <Link className="back-link" to="/register"> 
                                <FiLogIn size={16} color="#E02041"></FiLogIn>
                            Não tenho cadastro</Link>
                        </form>
                    </section>
                        <img src={herosImg} alt="Heroes"/>
            </div>

        );
    }