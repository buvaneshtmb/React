import './App.css';
import Card from './components/Card'

function App() {
  let data=[
    {
    plan:"free",
    price:0,
    user:"single user", 
    userEnabler:true,
    storage:"5GB storage",
    storageEnabler:true,
    publicProjects:"unlimited public projects",
    publicProjectsEnabler:true, 
    communityAccess:"community access",
    communityAccessEnabler:true,
    privateProjects:"unlimited private projects",
    privateProjectsEnabler:false,
    phoneSupport:"dedicated phone support",
    phoneSupportEnabler:false,
    subdomain:"free subdomain",
    subdomainEnabler:false,
    reports:"monthly reports",
    reportsEnabler:false   
  },
  {
    plan:"plus",  
    price:9,
    user:"5 user",
    userEnabler:true,
    storage:"5GB storage",
    storageEnabler:true,
    publicProjects:"unlimited public projects",
    publicProjectsEnabler:true, 
    communityAccess:"community access",
    communityAccessEnabler:true,
    privateProjects:"unlimited private projects",
    privateProjectsEnabler:true,
    phoneSupport:"dedicated phone support",
    phoneSupportEnabler:true,
    subdomain:"free subdomain",
    subdomainEnabler:true,
    reports:"monthly reports",
    reportsEnabler:false
  },
  {
    plan:"pro",
    price:49,
    user:"Unlimited users",
    userEnabler:true,
    storage:"150GB storage",
    storageEnabler:true,
    publicProjects:"unlimited public projects",
    publicProjectsEnabler:true, 
    communityAccess:"community access",
    communityAccessEnabler:true,
    privateProjects:"unlimited private projects",
    privateProjectsEnabler:true,
    phoneSupport:"dedicated phone support",
    phoneSupportEnabler:true,
    subdomain:"free subdomain",
    subdomainEnabler:true,
    reports:"monthly reports",
    reportsEnabler:true
  }
] 
  return <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <Card data={data[0]}/>
      <Card data={data[1]}/>
      <Card data={data[2]}/> */}

      {
        data.map((e)=>{
          return <Card data={e}/>
        })
      }
    </div>
  </div>
</section>
  </>
}

export default App;
