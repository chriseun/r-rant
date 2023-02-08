const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div>
            <img src={ data.place.pic } alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            </div>
            <div>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <h3>

                  {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <p>Located in { data.place.city }, { data.place.state } and serving { data.place.cuisines }</p>
            <h2>Comments</h2>
            <p>No comments yet</p>
            </div>
          </main>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>

        </Def>
    )
}

module.exports = show
// const React = require('react')
// const Def = require('../default')

// function show(data) {
//   // adding comments section

//     return (
//       <Def>
//         <main>
//           <br/>
//           <br/>
//           <br/>
//           <div className="row">
//             <div className="col-sm-6">
//               <img className="border border-warning img-places" src={data.place.pic} alt={data.place.name} />
//               <p className="location">
//                 Located in {data.place.city}, {data.place.state}
//               </p>
//             </div>
//             <div className="col-sm-6">
//             <h1 className="text-warning">{data.place.name} {/* SHOW DETAILS PAGE FOR ONE PLACE */}</h1>
//               <h2>
//                 Rating
//               </h2>
//               <p>
//                 Not Rated
//               </p>
//               <h2>
//                 Description
//               </h2>
//               <p>
//                 {data.place.showEstablished()}
//               </p>
//               <h5>
//                 Serving: {data.place.cuisines}
//               </h5>
//                         {/* buttons */}
//             <div className="edit-delete">
//               <div className="p-2">
//                 <a href={`/places/${data.id}/edit`} className="btn btn-primary">
//                   Edit
//                 </a>
//               </div>
//               <div className="p-2">
//                 <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
//                   <button type="submit" className="btn btn-danger">
//                     Delete
//                   </button>
//                 </form>
//               </div>
//             </div>
//             </div>




//             </div>
//             <div>
//               <h3>Got Your Own Rant or Rave?</h3>
//                {/* action path */}
//               <form className="container-fluid form-group w-75" action={`/places/${data.place.id}`} method="POST">

//                 <div className="row">
//                 <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
//                   <label for="author" >Author:</label>
//                     <input
//                       className="form-control"
//                       placeholder="Your Name Here"
//                       type="text"
//                       id="author"
//                       name="author"
//                     />
//                   </div>
//                   <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
//                   <label for="content">Content</label>
//                     <input
//                       placeholder="Write your Comment Here"
//                       className="form-control"
//                       type="textarea"
//                       id="content"
//                       name="content"
//                       />
//                   </div>
//                   <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name d-flex p-2">
//                   <label for="stars" className="text-warning d-flex p-2">Star Rating</label>
//                     <input
//                       className="form-control-range "
//                       type="range"
//                       id="stars"
//                       name="stars"
//                       step="0.5"
//                       min="1"
//                       max="5"
//                       />
//                   </div>
//                   <div className="col-sm-6 col-md-4 col-lg-3  d-flex p-2">
//                   <label for="rant" className="checkbox d-flex p-2 text-danger font-weight-bold">Rant 😡</label>
//                     <input
//                       className="checkbox d-flex p-2"
//                       type="checkbox"
//                       id="rant"
//                       name="rant"
//                       />
//                 </div>
//                 </div>
//                 <div className="p-2">
//                 <input
//                 className="btn btn-primary p-2"
//                 type="submit"
//                 value="Add Comment"
//                 />
//               </div>
//               </form>
//             </div>

//         </main>
//       </Def>
//     )
//   }


// module.exports = show
