import React from 'react';

const Froms = () => {
    return (
        <div >
            {/* ------input-1----------- */}
            <div style={{display:"flex",alignItems:"center",marginBottom:"5px"}}>
                <input style={{border:"0",backgroundColor:"white",padding:"10px",borderRadius:"3px 0px 0px 3px",outline:"0"}} type="email" name="" id="" placeholder='name@gmail.com'/>
                <div style={{backgroundColor:'white',padding:"7px 8px 7px 0px",borderRadius:"0px 3px 3px 0px",color:'#8B8079'}}>-</div>
            </div>
            {/* ------input-2----------- */}
            <div style={{display:"flex",alignItems:"center",marginBottom:"5px"}}>
                <input style={{border:"0",backgroundColor:"white",padding:"10px ",borderRadius:"3px 0pc 0px 3px",outline:"0",alignItems:"center"}} type="email" name="" id="" placeholder='elia@gmail.com'/>
                <div style={{backgroundColor:'white',padding:"7px 8px 7px 0px",borderRadius:"0px 3px 3px 0px",color:'#8B8079'}}>x</div>
            </div>
            {/* ----password--- */}
            <div style={{display:"flex",alignItems:"center",marginBottom:"5px",}}>
            <input style={{border:"0",outline:"0",borderRadius:"3px 0px 0px 3px",padding:"14px 0px 6px 10px",}}  type="password" placeholder="******"/>
                <div style={{backgroundColor:'white',padding:"7px 8px 7px 0px",borderRadius:"0px 3px 3px 0px",color:'#8B8079',}}>-</div>
            </div>
            {/* ------input-3----------- */}
            <div style={{display:"flex",alignItems:"center",marginBottom:"5px"}}>
             <input style={{border:"0",padding:"10px",outline:"0",borderRadius:"3px 0px 0px 3px",}} type="email" name="" id="" placeholder='elia@gmail.com'/>
            <div style={{backgroundColor:'white',padding:"7px 8px 7px 0px",borderRadius:"0px 3px 3px 0px",color:'#8B8079'}}>x</div>
            </div>
            {/* ----password---- */}
            <div style={{display:"flex",alignItems:"center",marginBottom:"5px"}}>
                <input style={{border:"0",backgroundColor:"white",padding:"14px 0px 6px 10px",borderRadius:"3px 0pc 0px 3px",outline:"0"}} type="password" name="" id="" placeholder='*****'/>
                <div style={{backgroundColor:'white',padding:"7px 8px 7px 0px",borderRadius:"0px 3px 3px 0px",color:'#8B8079'}}>x</div>
            </div>
            {/* // ----------input-4--------- */}
            <div style={{display:"flex",alignItems:"center",marginBottom:"5px"}}>
                <input style={{border:"0",backgroundColor:"white",padding:"10px ",borderRadius:"3px 0pc 0px 3px",outline:"0"}} type="email" name="" id="" placeholder='elia@gmail.com'/>
                <div style={{backgroundColor:'white',padding:"7px 8px 7px 0px",borderRadius:"0px 3px 3px 0px",color:'#8B8079'}}>xx</div>
            </div>
            {/* ------input-5----------- */}
            <div style={{display:"flex",alignItems:"center",marginBottom:"5px"}}>
             <input style={{border:"0",backgroundColor:"white",padding:"10px",borderRadius:"3px 0pc 0px 3px",outline:"0"}} type="email" name="" id="" placeholder='elia@gmail.com'/>
            <div style={{backgroundColor:'white',padding:"7px 8px 7px 0px",borderRadius:"0px 3px 3px 0px",color:'#8B8079'}}>x</div>
            </div>
            {/* ---password--- */}
            <div style={{display:"flex",alignItems:"center",marginBottom:"5px"}}>
                <input style={{border:"0",backgroundColor:"white",padding:"14px 0px 6px 10px",borderRadius:"3px 0pc 0px 3px",outline:"0"}} type="password" name="" id="" placeholder='******'/>
                <div style={{backgroundColor:'white',padding:"7px 8px 7px 0px",borderRadius:"0px 3px 3px 0px",color:'#8B8079'}}>xx</div>
            </div>
        </div>
        
    );
};

export default Froms;