import './mailList.css';

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mail-title">Mantente al día con las ofertas!</h1>
        <span className="mail-description">Registrate y te enviaremos las mejores ofertas</span>
        <div className="mail-input-container">
            <input type="text" placeholder="Tu correo..." />
            <button>Suscríbete</button>
        </div>
    </div>
  )
}

export default MailList