import {useForm, SubmitHandler, FieldValues} from 'react-hook-form';
import logo from '../../assets/logo.png';
import {Button, TextInput} from '../Common';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      pageNamePersian: '',
      pageNameEnglish: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <div className="bg-slate-200">
      <div className="flex flex-col items-center justify-center px-6 mx-auto h-screen lg:py-0">
        {/* <!--logo--> */}
        <a href="#" className="text-base flex flex-col items-center mb-6 text-gray-700">
          <img className="w-12 h-12 mr-2" src={logo} alt="logo" />
          صفحه ساز سروش پلاس
        </a>
        <div className="w-[566px] p-4 rounded-[16px] bg-white shadow">
          <div className="flex flex-col justify-center items-center w-full gap-6 mt-6">
            {/* <!--title--> */}
            <div className="flex justify-center items-center text-center font-semibold w-full text-gray-700">
              <p>اطلاعات طراحی صفحه</p>
            </div>
            {/* <!--form--> */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-start px-5 pb-7 w-full gap-6"
              action="#"
            >
              <div className="flex flex-col justify-start w-full">
                <TextInput
                  labelText=" عنوان صفحه خود را وارد کنید"
                  placeholder="عنوان صفحه"
                  formId="name"
                  register={register}
                />
                <label className="subLabel">عنوان صفحه ، تگ عنوان HTML است </label>
              </div>
              <div className="flex-col">
                <div className="flex flex-row items-center w-full gap-4">
                  <div className="w-full">
                    <TextInput
                      labelText="نام صفحه خود را وارد کنید (انگلیسی)"
                      placeholder="Page name"
                      formId="pageNameEnglish"
                      register={register}
                    />
                  </div>
                  <div className="w-full">
                    <TextInput
                      labelText="نام صفحه خود را وارد کنید (فارسی)"
                      placeholder="نام صفحه"
                      formId="pageNamePersian"
                      register={register}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center h-8">
                    <input id="show" type="checkbox" className="w-5 h-5 rounded-[15px]" />
                  </div>
                  <p className="subLabel">در طراحی نمایش داده شود</p>
                </div>
              </div>
              <Button text="ذخیره و شروع طراحی" type="primary" onClick={() => navigate('/home')} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
