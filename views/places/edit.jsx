// const React = require('react')
// const Def = require('../default')

// function edit_form (data) {
//     return (
//         <Def>
//           <main>
//             <h1>Edit Place</h1>
//           </main>
// <form method="POST" action={`/places/${data.id}?_method=PUT`}> {/*need to fix path {data.place.id} */}
//   <div className="row">
//   <div className="form-group col-sm-6">
//     <label htmlFor="name">Place Name</label>
//     <input className="form-control" id="name" name="name" required defaultValue={data.place.name}/>
//   </div>
//   <div className="form-group col-sm-6">
//     <label htmlFor="pic">Place Picture</label>
//     <input className="form-control" id="pic" name="pic" defaultValue={data.place.pic}/>
//   </div>
//   <div className="form-group col-sm-6">
//     <label htmlFor="city">City</label>
//     <input className="form-control" id="city" name="city" defaultValue={data.place.city}/>
//   </div>
//   <div className="form-group col-sm-6">
//     <label htmlFor="state">State</label>
//     <input className="form-control" id="state" name="state" defaultValue={data.place.state}/>
//   </div>
//   <div className="form-group col-sm-6">
//     <label htmlFor="cuisines">Cuisines</label>
//     <input className="form-control" id="cuisines" name="cuisines" required defaultValue={data.place.cuisines}/>
//   </div>
//   <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
//     <label for="founded">Founded Year</label>
//       <input className="form-control"
//         id="founded"
//           name="founded"
//           value={data.place.founded}/>
//     </div>
//   <input className="btn btn-primary" type="submit" value="Add Place" />
//   </div>
// </form>


//         </Def>
//     )
// }

// module.exports = edit_form

const React = require('react')
const Def = require('../default')

function  edit_form(data) {
    return (
      <Def>
          <main>
          <h1 className="text-warning">Edit Place</h1>
          <br />
          <form className="container-fluid form-group w-75 " action={`/places/${data.id}?_method=PUT`} method="POST"> {/*need to fix path {data.place.id} */}
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label htmlFor="name">PLace Name:</label>
                <input className="form-control"
                id="name"
                name="name"
                value={data.place.name}
                required
                />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label htmlFor="pic">Place Picture:</label>
                <input className="form-control" type="text"
                id="pic"
                name="pic"
                value={data.place.pic}
                />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label htmlFor="city">City:</label>
                <input className="form-control"
                id="city"
                name="city"
                value={data.place.city}
                />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label htmlFor="state">State:</label>
                <input className="form-control"
                list="state-list"
                id="state"
                name="state"
                value={data.place.state}
                />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label htmlFor="cuisines">Cuisines:</label>
                <input className="form-control"
                id="cuisines"
                name="cuisines"
                value={data.place.cuisines}
                required
                />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label for="founded">Founded Year</label>
                <input className="form-control"
                id="founded"
                name="founded"
                value={data.place.founded}
                />
              </div>
              <div className="p-2">
                <input className="btn btn-primary" type="submit" value="Save Edit" />
              </div>
            </div>
          </form>
          </main>
      </Def>
    )
  }


module.exports = edit_form
