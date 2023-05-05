import FormInput from '../../components/form-input/FormInput'
import './contact.style.scss'
import EmailIcon from '../../assets/images/mail.svg'
import PersonIcon from '../../assets/images/person-sharp.svg'
import Button from '../../components/button/Button'

const Contact = () => {
  return (
    <section className="slide-left container">
      <div>
        <div className="fs-700 text-bold text-dark title">Contact</div>
        <p>Lets get in touch and talk about your next project.</p>
      </div>
      <form className="contact">
        <FormInput
          type="email"
          name="email"
          required
          autoComplete=""
          label="Email"
          alts="email"
          icons={EmailIcon}
        />
        <FormInput
          type="name"
          name="name"
          required
          autoComplete=""
          label="Name"
          alts="name"
          icons={PersonIcon}
        />
        <FormInput
          type="subject"
          name="subject"
          required
          autoComplete=""
          label="Say something..."
          alts="subject"
        />
        <Button>Send message</Button>
      </form>
    </section>
  )
}

export default Contact
