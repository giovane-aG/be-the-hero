import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import  { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')
  const histoty = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault()

    const incident = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', incident, {
        headers: {
          Authorization: ongId,
        }
      })
      histoty.push('/profile')
    } catch (error) {
      alert('Erro ao criar novo caso, tente novamente.')
    }

  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>

          <h1>Cadastra novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>
          <Link className='back-link' to="/profile">
						<FiArrowLeft size={16} color='#e02041'  />
						Voltar para home
					</Link>
        </section>

        <form>
          <input 
            placeholder='Título' 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder='Descrição' 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder='Valor' 
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button
            onClick={handleNewIncident}
            type="submit" 
            className='button'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
