import skillStyles from '@/styles/skills.module.scss'
export default function Skills() {
    return (
        <section className={skillStyles.skills}>
            <h2 className="section_title">skills</h2>
            <div className={skillStyles.skill_progress}>
                <h3>Frontend web Development</h3>
                <div className={skillStyles.progress}><div></div></div>
                <span>Always room for improvement</span>
            </div>
            <div className={skillStyles.skill_progress}>
                <h3>Database Engineering</h3>
                <div className={skillStyles.progress}><div></div></div>
                <span>Always room for improvement</span>
            </div>
            <div className={skillStyles.skills_list}>
                <div className={skillStyles.skill_list}>
                    <h3 className="section_title">Great experience with</h3>
                    <ul>
                        <li>HTML, CSS & JavaScript</li>
                        <li>Sass & Bootstrap</li>
                        <li>NodeJs</li>
                        <li>ReactJs & NextJs</li>
                        <li>Prisma</li>
                        <li>SQL & MariaDB (XAMPP)</li>
                        <li>Git & Github</li>
                    </ul>
                </div>
                <div className={skillStyles.skill_list}>
                    <h3 className="section_title">Some experience with</h3>
                    <ul>
                        <li>Python & Django Framework</li>
                        <li>PHP</li>
                        <li>Postgresql</li>
                        <li>MongoDB</li>
                        <li>D3Js</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
