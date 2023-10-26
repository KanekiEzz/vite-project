import { apple, bill, google} from '../assets'
import styles, { layout } from '../style'

const Billing = () => (

  <section id='product' className={layout.sectionReverse}>

    <div className={layout.sectionInfo}>
      <img src={bill} alt="billing" className={`w-[100%] h-[100%] relative z-[5]`}/>
      <div className="absolute z-[3] w-[60%] h-[60%] -left-[50%] rounded-full pink__gradient"/> 
      <div className="absolute z-[3] w-[60%] h-[60%] -left-[50%] rounded-full white__gradient"/>
    </div>

    <div className={layout.sectionInfo}>

      <div>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
          neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
      </div>
      
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        <img src={google} alt="apple_store" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
      </div>
    
    </div>
  </section>

)

export default Billing
