import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { CertificationItem } from '../../types/portfolio';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { LightboxModal } from '../common/LightboxModal';
import { ExternalLink, ShieldCheck, Eye } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 md:py-32 border-b border-ivory-300/80 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ivory-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold block mb-2">
              06 // FORMAL CREDENTIALS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-ink-900 tracking-tight">
              Publishings & Certifications
            </h2>
          </div>
          <div className="text-sm font-mono text-ink-500 max-w-sm">
            Verified credentials from Google Cloud, AWS, WISER, ElevateIQ, and Qiskit.
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-ivory-300 shadow-2xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Certificate Preview Card */}
                <div
                  className="mb-4 rounded-xl overflow-hidden border border-ivory-200 cursor-pointer relative"
                  onClick={() => setSelectedCert(cert)}
                >
                  <ImageWithFallback
                    image={cert.image}
                    title={cert.title}
                    categoryLabel="Certificate"
                    aspectClass="aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/40 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-xs">
                    <span className="p-2.5 rounded-full bg-white text-ink-900 shadow-md">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-earth-700 font-bold mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-earth-600" />
                  <span>{cert.issueDate}</span>
                </div>

                <h3 className="text-base font-bold text-ink-900 tracking-tight leading-snug group-hover:text-earth-600 transition-colors mb-1.5">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-ink-500 mb-3 font-medium">
                  {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-ivory-100 text-ink-700 border border-ivory-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-ivory-200 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-ink-600 hover:text-earth-600 transition-colors font-medium"
                >
                  Inspect Certificate
                </button>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-earth-600 hover:text-earth-800 p-1"
                    title="View Credential"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <LightboxModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          subtitle={`Verified Credential • ${selectedCert.issuer}`}
          imageSrc={selectedCert.image.src}
          imageAlt={selectedCert.image.alt}
          externalLink={selectedCert.credentialUrl}
          externalLinkText="Verify Credential"
          details={
            <div className="space-y-3">
              <p className="text-xs font-mono text-ink-500">
                Issued by <strong className="text-ink-800">{selectedCert.issuer}</strong> ({selectedCert.issueDate})
              </p>
              {selectedCert.credentialId && (
                <p className="text-xs font-mono bg-ivory-200 px-3 py-1.5 rounded text-ink-700 inline-block font-semibold">
                  Credential ID: {selectedCert.credentialId}
                </p>
              )}
              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-ink-800 block mb-2">Verified Competencies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs font-mono rounded bg-white border border-ivory-300 text-ink-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      )}
    </section>
  );
};
