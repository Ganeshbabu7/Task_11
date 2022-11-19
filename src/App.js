import Card from "./component/Card";

function App(){
  let plans = [
    {
      plan:"FREE",
      price: "0",
      userEnabler:true,
      user:"Single User",
      storageEnabler:true,
      storage:"5GB Storage",
      publicProjectEnabler:true,
      publicProject:"Unlimited Public Projects",
      accessEnabler:true,
      access:"Community Access",
      privateProjectEnabler:false,
      privateProject:"Unlimited Private Projects",
      supportEnabler:false,
      support:"Dedicated Phone Support",
      domainEnabler:false,
      domain:"Free Subdomain",
      reportEnabler:false,
      report:"Monthly Status Reports"
    },
    {
      plan:"PLUS",
      price: "9",
      userEnabler:true,
      user:"5 Users",
      storageEnabler:true,
      storage:"50GB Storage",
      publicProjectEnabler:true,
      publicProject:"Unlimited Public Projects",
      accessEnabler:true,
      access:"Community Access",
      privateProjectEnabler:true,
      privateProject:"Unlimited Private Projects",
      supportEnabler:true,
      support:"Dedicated Phone Support",
      domainEnabler:true,
      domain:"Free Subdomain",
      reportEnabler:false,
      report:"Monthly Status Reports"
    },
    {
      plan:"PRO",
      price: "49",
      userEnabler:true,
      user:"Unlimited Users",
      storageEnabler:true,
      storage:"150GB Storage",
      publicProjectEnabler:true,
      publicProject:"Unlimited Public Projects",
      accessEnabler:true,
      access:"Community Access",
      privateProjectEnabler:true,
      privateProject:"Unlimited Private Projects",
      supportEnabler:true,
      support:"Dedicated Phone Support",
      domainEnabler:true,
      domain:"Unlimited Free Subdomains",
      reportEnabler:true,
      report:"Monthly Status Reports"
    }
  ]
  return <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <Card data={plans[0]}/>
            <Card data={plans[1]}/>
            <Card data={plans[2]}/>
          </div>
        </div>
      </section>
    </>
};
export default App;