import Image from 'next/image'

const StudentCard = () => {
  return (
    <div className='custom-card-wrapper col-12 col-md-6 col-lg-4'>
      <div className='custom-card'>
        <div className='avatar-wrapper'>
          <img src='img/muratakdağ.jpg' alt='' className='avatar' />
          <Image src='/muratakdağ.jpg' width={100} height={130} />
        </div>
        <div>
          <h3>Murat Akdağ</h3>
          <p>
            I consider myself a team person, who loves bringing smiles to
            people's faces. With high attention to detail and good practices, I
            am patient and I enjoy helping people overcome their problems. "If
            you can't explain it simply, you don't understand it well enough"
            and "Everyone you meet has something to teach you" are two of my
            favorite mottos.
          </p>
          <p>
            I am eager to learn new technologies and improve my knowledge as I
            spend most of my free time improving my skills and creating
            tech-related content.
          </p>
        </div>
        <div className='contact'>
          <a
            href='https://www.linkedin.com/in/muratakda%C4%9F/'
            target=' _blank'
          >
            <Image src='linkedin.svg' alt='linkedin' width={72} height={72} />
          </a>
          <a href='https://www.github.com/muratakdag' target=' _blank'>
            <Image src='github.svg' alt='github' width={72} height={72} />
          </a>
          <a href='https://www.codepen.io/makdag5/' target=' _blank'>
            <Image src='codepen.svg' alt='codepen' width={72} height={72} />
          </a>
          <a href='https://www.codesandbox.io/u/makdagist/' target=' _blank'>
            <Image
              src='codesandbox.svg'
              alt='codesandbox'
              width={72}
              height={72}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
export default StudentCard
