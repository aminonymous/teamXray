import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loading from './../../helpers/Loading';
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from './../../app/team/teamAction';

const Teams = () => {
  const teamList = useSelector(({teams:listTeams}) => listTeams)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchTeams())
  },[])
 
  return (
    <section className="bg-black font-main min-h-screen">
       <Helmet>
        <meta charSet="utf-8" />
        <title>xrayTeam-Teams</title>
        <meta name="description" content="teams xray team" />
      </Helmet>
      <div className="containerr py-16">
          {teamList.loading === true && <Loading/>}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {teamList.teamList.Teams?.map(item => (
            <div
              className="overflow-hidden relative group rounded-md"
              key={item._id}
            >
              <img
                src={`${process.env.REACT_APP_BASE_URL}/${item.banner}`}
                alt={item.name}
                className="h-72 w-full transition-all duration-500 hover:scale-125 group-hover:opacity-50"
              />
              <p className="absolute top-0 w-full -skew-y-12 transition duration-200 bg-xred p-3">
                {item.name.split("-").join(" ")}
              </p>
              <div className="w-full group-hover:flex  flex justify-center sm:hidden ">
                <Link to={`/teams/${item.name}`}  className="absolute p-3 text-center bg-xred w-36 top-1/2 hover:bg-opacity-70">
                    players
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
