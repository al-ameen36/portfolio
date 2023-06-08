import eduStyles from '@/styles/education.module.scss';
export default function Education() {
    return (
        <section className={eduStyles.edu} aria-labelledby="education_title">
            <h2 id="education_title" className="section_title">education</h2>
            <div className={eduStyles.item}>
                <span>
                    <time dateTime='2015'>2015</time> - <time datatype='2021'>2021</time>
                </span>
                <h3>bsc computer science</h3>
                <span>second class lower</span>
                <p>ahmadu bello university, zaria</p>
            </div>
            <div className={eduStyles.item}>
                <span>
                    <time dateTime='2009'>2009</time> - <time datatype='2015'>2015</time>
                </span>
                <h3>higher secondary school certificate</h3>
                <p>nigerian military school, zaria</p>
            </div>
        </section>
    )
}
