import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, BookOpen, Globe, Languages, ShieldCheck, MailCheck } from 'lucide-react';
import { supabase } from '../../utils/supabaseClient';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'student' | 'teacher' | 'admin';
  region: string;
  language: string;
  agreeToTerms: boolean;
  newsletter: boolean;
};

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [emailSent, setEmailSent] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<RegisterFormData>();

  const password = watch('password');
  const formData = watch();

  // const handleResendCode = async () => {
  //   try {
  //     setResendDisabled(true);
  //     setCountdown(60);
      
  //     const { error } = await supabase.auth.resend({
  //       type: 'signup',
  //       email: formData.email,
  //     });

  //     if (error) throw error;

  //     setError(null);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : 'Failed to resend verification code');
  //   }
  // };

  const onSubmit = async (data: RegisterFormData) => {
    if (step < 3) {
      nextStep();
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // In a real app, you would verify the code here
      // For demo purposes, we'll just proceed with registration
      const { error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: `${data.firstName} ${data.lastName}`,
            role: data.role,
            region: data.region,
            language: data.language,
          },
        },
      });

      if (signUpError) throw signUpError;

      // Show success message and redirect to login
      navigate('/login', {
        state: {
          message: 'Registration successful! Please check your email to verify your account.',
        },
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to register');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 2 && !emailSent) {
      // Simulate sending verification email
      setEmailSent(true);
      setResendDisabled(true);
      setCountdown(60);
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  // Countdown timer for resend button
  React.useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false);
    }
  }, [countdown, resendDisabled]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative w-full max-w-md p-8 m-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              SikshayLive
            </span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          {step === 3 ? 'Verify Your Email' : 'Create your account'}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          {step < 3 ? `Step ${step} of 3` : 'Final step'}
        </p>

        {error && (
          <div className="mb-6 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-900 rounded-lg p-4">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                  Error
                </h3>
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <select
                      className="appearance-none block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                      {...register('region', { required: 'Region is required' })}
                    >
                      <option value="">Select Region</option>
                      <option value="asia">Asia</option>
                      <option value="europe">Europe</option>
                      <option value="americas">Americas</option>
                      <option value="africa">Africa</option>
                      <option value="oceania">Oceania</option>
                    </select>
                  </div>
                  {errors.region && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.region.message}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Languages className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <select
                      className="appearance-none block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                      {...register('language', { required: 'Language is required' })}
                    >
                      <option value="">Select Language</option>
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="hi">Hindi</option>
                    </select>
                  </div>
                  {errors.language && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.language.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="appearance-none block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                    {...register('firstName', { required: 'First name is required' })}
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="appearance-none block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  I am a:
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['student', 'teacher', 'admin'].map((role) => (
                    <label
                      key={role}
                      className="relative flex cursor-pointer rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 p-4 shadow-sm focus:outline-none"
                    >
                      <input
                        type="radio"
                        {...register('role', { required: 'Please select a role' })}
                        value={role}
                        className="sr-only"
                      />
                      <span className="flex flex-1 justify-center">
                        <span className="capitalize">{role}</span>
                      </span>
                      <span
                        className={`absolute -inset-px rounded-lg border-2 pointer-events-none transition-colors ${
                          watch('role') === role
                            ? 'border-indigo-500'
                            : 'border-transparent'
                        }`}
                        aria-hidden="true"
                      />
                    </label>
                  ))}
                </div>
                {errors.role && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.role.message}
                  </p>
                )}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="appearance-none block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="appearance-none block w-full pl-10 pr-10 py-3 rounded-lg text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
                      },
                    })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm password"
                    className="appearance-none block w-full pl-10 pr-10 py-3 rounded-lg text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) =>
                        value === password || 'The passwords do not match',
                    })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  {...register('newsletter')}
                />
                <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Get SikshayLive updates about new features and learning tips
                </label>
              </div>
            </>
          )}

          {/* {step === 3 && (
            <>
              <div className="text-center">
                <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full inline-flex">
                  <MailCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Verify your email
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6">
                  We've sent a verification code to <strong>{formData.email}</strong>
                </p>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ShieldCheck className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter the 6-digit code"
                    className="appearance-none block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 text-center tracking-wider font-medium"
                    {...register('verificationCode', {
                      required: 'Verification code is required',
                      minLength: {
                        value: 6,
                        message: 'Code must be 6 characters',
                      },
                    })}
                    maxLength={6}
                  />
                </div>
                {errors.verificationCode && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.verificationCode.message}
                  </p>
                )}
              </div>

              <div className="text-center mb-6">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={resendDisabled}
                  className={`text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 
                    ${resendDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
                >
                  {resendDisabled
                    ? `Resend code in ${countdown}s`
                    : "Didn't receive a code? Resend"}
                </button>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  {...register('agreeToTerms', {
                    required: 'You must agree to the terms and conditions',
                  })}
                />
                <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  I agree to the{' '}
                  <Link
                    to="/terms"
                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    terms and conditions
                  </Link>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.agreeToTerms.message}
                </p>
              )}
            </>
          )} */}

          <div className="flex gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Back
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transform transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Creating account...
                  </div>
                ) : (
                  'Complete Sign Up'
                )}
              </button>
            )}
          </div>

          <div className="mt-6 text-center">
            <span className="text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
            </span>
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Sign in instead
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;