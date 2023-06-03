import StudentCard from '@/components/StudentCard'

export default function Home() {
  return (
    <main>
      <section className='welcome'>
        <div>
          <h1>BilgeAdam Akademi Students</h1>
          <p>- 3505 -</p>
        </div>
      </section>
      <section className='students'>
        <div className='intro'>
          <h2>Meet the students</h2>
          <p>
            Hello! My name is
            <a
              href='https://www.linkedin.com/in/muratakda%C4%9F/'
              target='_blank'
            >
              Murat Akdağ
            </a>
            and I am a Web Developer/Instructor. During the course I teach at IT
            School, I taught my students how to use Git & GitHub. As practice, I
            challenged them to fork this project and complete their contact
            information.
          </p>
          <p>
            Take a look at their LinkedIn, GitHub, CodePen CodeSandbox profiles,
            and if you like what you see, don't hesitate to contact them for a
            job!
          </p>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
          </div>
        </div>
      </section>
    </main>
  )
}
