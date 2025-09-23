import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";

const HeaderLayout = () => {
  const { user, signOutData } = useAuth();

  return (
    <div className={`flex items-center justify-between p-2 flex-wrap gap-5`}>
      <p className="text-[20px] font-bold">Indicium Healthcare</p>

      <div className="flex items-center gap-3">
        {user && (
          <Button variant="primary" onClick={() => signOutData()}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeaderLayout;
