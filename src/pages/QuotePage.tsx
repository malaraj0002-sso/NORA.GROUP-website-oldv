import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Upload, X, FileText, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];

export function QuotePage() {
  const { t } = useI18n();
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>('');

  const projectTypes = ['kitchen', 'bedroom', 'wardrobe', 'doors', 'furniture', 'office', 'commercial', 'other'];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    const selected = Array.from(e.target.files || []);

    if (files.length + selected.length > MAX_FILES) {
      setFileError(t.quote.form.validation.fileCount);
      return;
    }

    for (const file of selected) {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setFileError(t.quote.form.validation.fileType);
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setFileError(t.quote.form.validation.fileSize);
        return;
      }
    }

    setFiles([...files, ...selected]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-warm-50 flex items-center">
        <div className="container-luxury">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-charcoal-900 mb-4">{t.quote.form.success}</h1>
              <p className="text-charcoal-500 text-lg mb-10">{t.quote.form.successDesc}</p>
              <Link to="/" className="btn-primary">
                {t.notFound.backHome}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  const steps = [t.quote.steps.step1, t.quote.steps.step2, t.quote.steps.step3, t.quote.steps.step4, t.quote.steps.step5];

  return (
    <>
      <section className="relative h-[30vh] min-h-[250px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 to-charcoal-950" />
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.quote.eyebrow}</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-warm-50 mb-2">{t.quote.title}</h1>
            <p className="text-warm-50/70 text-lg">{t.quote.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-luxury max-w-3xl">
          {/* Progress */}
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              {steps.map((label, i) => (
                <div key={i} className="flex-1 flex flex-col items-center relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      i + 1 <= step ? 'bg-charcoal-900 text-warm-50' : 'bg-warm-200 text-charcoal-400'
                    }`}
                  >
                    {i + 1 < step ? <Check className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className={`text-xs mt-2 text-center hidden sm:block ${i + 1 <= step ? 'text-charcoal-900 font-medium' : 'text-charcoal-400'}`}>
                    {label}
                  </span>
                  {i < steps.length - 1 && (
                    <div className={`absolute top-5 start-1/2 w-full h-0.5 ${i + 1 < step ? 'bg-charcoal-900' : 'bg-warm-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Step 1: Customer Info */}
              {step === 1 && (
                <Reveal>
                  <div className="space-y-5">
                    <h2 className="text-xl font-bold text-charcoal-900 mb-6">{t.quote.steps.step1}</h2>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.quote.form.fullName} *</label>
                      <input type="text" required className="input-luxury" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.quote.form.phone} *</label>
                      <input type="tel" required className="input-luxury" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.quote.form.whatsapp}</label>
                      <input type="tel" className="input-luxury" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.quote.form.email}</label>
                      <input type="email" className="input-luxury" />
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Step 2: Project Type */}
              {step === 2 && (
                <Reveal>
                  <div>
                    <h2 className="text-xl font-bold text-charcoal-900 mb-6">{t.quote.steps.step2}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {projectTypes.map((type) => (
                        <label key={type} className="cursor-pointer">
                          <input type="radio" name="projectType" value={type} className="peer sr-only" required />
                          <div className="p-4 rounded-xl border-2 border-charcoal-200 text-center transition-all peer-checked:border-gold-500 peer-checked:bg-gold-50 hover:border-charcoal-400">
                            <span className="text-sm font-medium text-charcoal-700">{t.quote.form.projectTypes[type as keyof typeof t.quote.form.projectTypes]}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Step 3: Project Details */}
              {step === 3 && (
                <Reveal>
                  <div className="space-y-5">
                    <h2 className="text-xl font-bold text-charcoal-900 mb-6">{t.quote.steps.step3}</h2>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.quote.form.location}</label>
                      <input type="text" className="input-luxury" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.quote.form.dimensions}</label>
                      <input type="text" className="input-luxury" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.quote.form.budget}</label>
                      <input type="text" className="input-luxury" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.quote.form.completionDate}</label>
                      <input type="date" className="input-luxury" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.quote.form.notes}</label>
                      <textarea rows={4} className="input-luxury resize-none" />
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Step 4: Files */}
              {step === 4 && (
                <Reveal>
                  <div>
                    <h2 className="text-xl font-bold text-charcoal-900 mb-6">{t.quote.steps.step4}</h2>
                    <p className="text-charcoal-500 text-sm mb-4">{t.quote.form.filesHint}</p>

                    <label className="block">
                      <input type="file" multiple accept=".jpg,.png,.webp,.pdf" onChange={handleFileChange} className="sr-only" />
                      <div className="border-2 border-dashed border-charcoal-200 rounded-xl p-12 text-center cursor-pointer hover:border-gold-500 transition-colors">
                        <Upload className="w-10 h-10 text-charcoal-400 mx-auto mb-4" />
                        <span className="text-charcoal-700 font-medium">{t.quote.form.selectFiles}</span>
                      </div>
                    </label>

                    {fileError && <p className="text-red-500 text-sm mt-3">{fileError}</p>}

                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {files.map((file, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-warm-100 rounded-lg">
                            <div className="flex items-center gap-3">
                              {file.type.startsWith('image/') ? (
                                <ImageIcon className="w-5 h-5 text-charcoal-500" />
                              ) : (
                                <FileText className="w-5 h-5 text-charcoal-500" />
                              )}
                              <span className="text-sm text-charcoal-700">{file.name}</span>
                            </div>
                            <button type="button" onClick={() => removeFile(i)} className="text-charcoal-400 hover:text-red-500">
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              )}

              {/* Step 5: Review */}
              {step === 5 && (
                <Reveal>
                  <div>
                    <h2 className="text-xl font-bold text-charcoal-900 mb-6">{t.quote.form.review}</h2>
                    <p className="text-charcoal-500 text-sm mb-6">{t.quote.subtitle}</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between py-3 border-b border-charcoal-100">
                        <span className="text-charcoal-400">{t.quote.form.fullName}</span>
                        <span className="text-charcoal-900 font-medium">—</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-charcoal-100">
                        <span className="text-charcoal-400">{t.quote.form.projectType}</span>
                        <span className="text-charcoal-900 font-medium">—</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-charcoal-100">
                        <span className="text-charcoal-400">{t.quote.form.files}</span>
                        <span className="text-charcoal-900 font-medium">{files.length}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <button type="button" onClick={() => setStep(step - 1)} className="btn-secondary">
                    {t.common.previous}
                  </button>
                ) : <div />}

                {step < 5 ? (
                  <button type="button" onClick={() => setStep(step + 1)} className="btn-primary">
                    {t.common.next}
                    <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                  </button>
                ) : (
                  <button type="submit" disabled={status === 'submitting'} className="btn-primary">
                    {status === 'submitting' ? t.quote.form.submitting : t.quote.form.submit}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
