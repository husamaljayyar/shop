import {
  ProfileText,
  InnerContainerContent,
  TypographyText,
  ContainerSection,
  InnerContainerSection,
} from "./ProfileScreen.Styles";
import Button from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../Redux/User/userActions";
function ProfileScreen(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ContainerSection>
      <InnerContainerSection>
        <TypographyText fontWeight={700} fontSize={32}>
          {state.userDetails.user.name}
        </TypographyText>
        <ProfileText to={""}>My Orders</ProfileText>
        <ProfileText to={""}>Settings</ProfileText>

        <ProfileText
          onClick={() => {
            dispatch(logoutAction());
            localStorage.removeItem("user");
          }}
          as={"span"}
          style={{
            marginTop: "auto",
            cursor: "pointer",
          }}
        >
          Logout
        </ProfileText>
      </InnerContainerSection>
      <InnerContainerSection isBig>
        <TypographyText fontWeight={700} fontSize={32}>
          My Profile
        </TypographyText>
        <InnerContainerContent>
          <ProfileText isGray as={"span"}>
            Name
          </ProfileText>
          <ProfileText as={"span"}>{state.userDetails.user.name}</ProfileText>
        </InnerContainerContent>
        <InnerContainerContent>
          <ProfileText isGray as={"span"}>
            Email
          </ProfileText>
          <ProfileText as={"span"}>{state.userDetails.user.email}</ProfileText>
        </InnerContainerContent>
        <Button
          text={"Update Profile"}
          link={"/update-profile"}
          width={"220px"}
          borderRadius={6}
          style={{ marginTop: 50 }}
        />
      </InnerContainerSection>
    </ContainerSection>
  );
}

export default ProfileScreen;
