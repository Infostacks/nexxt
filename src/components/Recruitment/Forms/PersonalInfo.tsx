import { useForm } from "react-hook-form";
import { useFormData } from "../../../hooks/formContext";

export default function PersonalInfo({ formStep, nextFormStep }: any) {
  const { setFormValues } = useFormData();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values: any) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div
      className={`${formStep === 0 ? "block" : "hidden"} flex flex-col gap-10`}
    >
      <h2 className="text-2xl font-bold">Personal Info</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`flex flex-col gap-3 mb-[1.5rem] text-xl`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p
              className={`text-redColor text-[1.2rem] mt-[0.4rem] inline-block`}
            >
              Email is required
            </p>
          )}
        </div>
        <button
          className="text-xl font-bold bg-secondary shadow-lg shadow-secondary py-3 px-5 rounded-xl drop-shadow-md"
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
}
