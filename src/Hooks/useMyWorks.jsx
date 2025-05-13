import { useQuery } from "@tanstack/react-query";
import useAxious from "./useAxious";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMyWorks = () => {
  const AxiousURL = useAxious();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const { data: AllWorks = [], refetch } = useQuery({
    queryKey: ["AllWorks"],
    queryFn: async () => {
      const res = await AxiousURL.get(`/myworks/${userEmail}`);
      return res.data;
    },
  });

  // history

  const { data: AllHistory = [] } = useQuery({
    queryKey: ["AllHistory"],
    queryFn: async () => {
      const res = await AxiousURL.get(`/myworkshistory/${userEmail}`);
      return res.data;
    },
  });

  const addWorks = async (addinfo) => {
    //console.log(addinfo);
    const res = await AxiousURL.post("/addworks", addinfo);
    refetch();
    return res.data;
  };

  const addHistory = async (addinfo) => {
    //console.log(addinfo);
    const res = await AxiousURL.post("/myworkshistory", addinfo);
    return res.data;
  };

  const deleteWork = async (id) => {
    //console.log(id);
    const res = await AxiousURL.delete(`/deletework/${id}`);
    refetch();
    return res.data;
  };

  const deleteHistory = async (data) => {
    // //console.log('id')
    const res = await AxiousURL.delete(`/myworkshistory`, data);
    refetch();
    return res.data;
  };
  // announsment
  const addAnnounment = async (AnnounseInfo) => {
    console.log(AnnounseInfo);
    const res = await AxiousURL.post("/announsment", AnnounseInfo);
    return res.data;
  };

  const { data: AllAnnounment = [] } = useQuery({
    queryKey: ["AllAnnounment"],
    queryFn: async () => {
      const res = await AxiousURL.get(`/announsment`);
      return res.data;
    },
  });

  const deleteAnnunsment = async (id) => {
    //console.log(id);
    const res = await AxiousURL.delete(`/announsment/${id}`);
    refetch();
    return res.data;
  };

  

//   users
const addusers = async (userInfo) => {
    console.log(userInfo);
    const res = await AxiousURL.post("/users", userInfo);
    return res.data;
  };

  const { data: Allusers = [] } = useQuery({
    queryKey: ["Allusers"],
    queryFn: async () => {
      const res = await AxiousURL.get(`/users`);
      return res.data;
    },
  });

// omly for user

  const { data: onlyuser = [] } = useQuery({
 
    queryKey: ["onlyuser" , userEmail],
    queryFn: async () => {
      const res = await AxiousURL.get(`/useronly/${userEmail.toLowerCase()}`);
      return res.data;
    },
  });
  //console.log(AllHistory);
  return {
    AllWorks,
    addWorks,
    deleteWork,
    AllHistory,
    addHistory,
    refetch,
    deleteHistory,
    addAnnounment,
    AllAnnounment,
    deleteAnnunsment,
    addusers,
    Allusers,
    onlyuser
  };
};

export default useMyWorks;
