import bannerStyles from '@/styles/banner.module.scss'
import { AiFillGithub } from 'react-icons/ai'

export default function Banner() {
    return (
        <header className={bannerStyles.banner}>
            <h1 className={bannerStyles.heading}>muhammad al-ameen abdullahi</h1>
            <div className={bannerStyles.job_title}>
                <span>frontend developer</span>
                <span className={bannerStyles.ampasand}>&</span>
                <span>database engineer</span>
            </div>
            <div className={bannerStyles.actions}>
                <div className={bannerStyles.actions_top}>
                    <button id={bannerStyles.contact_btn} className='btn'>contact me</button>
                    <button className='btn'>download CV</button>
                </div>
                <span>or</span>
                <div>
                    <button className='btn'><AiFillGithub /> github profile</button>
                </div>
            </div>
        </header>
    )
}
