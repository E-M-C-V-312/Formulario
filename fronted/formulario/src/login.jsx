const LoginForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  
    const onSubmit = async (data) => {
      if (data.username === 'admin' && data.password === 'Adminin') {
        // Redirigir al panel de administración
      } else {
        // Mostrar mensaje de error de autenticación para el administrador
      }
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('username')} placeholder="Usuario" />
        {errors.username && <p>{errors.username.message}</p>}
        <input type="password" {...register('password')} placeholder="Contraseña" />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    );
  };
  