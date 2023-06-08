import projectStyles from '@/styles/projects.module.scss'
import Image from 'next/image'

import image_1 from '@/public/images/1.jpg'
import image_2 from '@/public/images/2.jpg'
import image_3 from '@/public/images/3.jpg'
import image_4 from '@/public/images/4.jpg'

export default function Projects() {
    return (
        <section>
            <h2 className='section_title'>Projects</h2>
            <div className={projectStyles.project}>
                <div className={projectStyles.image}>
                    <Image src={image_1} alt='' />
                </div>
                <div>
                    <h3 className={projectStyles.title}>Video streaming service</h3>
                    <hr className={projectStyles.divider} />
                    <span className={projectStyles.tags}>ReactJs | NextJs | Sass | SQL | MariaDB</span>
                </div>
            </div>
            <div className={projectStyles.project}>
                <div className={projectStyles.image}>
                    <Image src={image_2} alt='' />
                </div>
                <div>
                    <h3 className={projectStyles.title}>Online CBT system</h3>
                    <hr className={projectStyles.divider} />
                    <span className={projectStyles.tags}>ReactJs | NextJs | Sass | SQL | MariaDB</span>
                </div>
            </div>
            <div className={projectStyles.project}>
                <div className={projectStyles.image}>
                    <Image src={image_3} alt='' />
                </div>
                <div>
                    <h3 className={projectStyles.title}>E-Commerce Store</h3>
                    <hr className={projectStyles.divider} />
                    <span className={projectStyles.tags}>ReactJs | NextJs | Sass | SQL | MariaDB</span>
                </div>
            </div>
            <div className={projectStyles.project}>
                <div className={projectStyles.image}>
                    <Image src={image_4} alt='' />
                </div>
                <div>
                    <h3 className={projectStyles.title}>Nigerian election analysis</h3>
                    <hr className={projectStyles.divider} />
                    <span className={projectStyles.tags}>ReactJs | NextJs | Sass | SQL | MariaDB</span>
                </div>
            </div>
        </section>
    )
}
