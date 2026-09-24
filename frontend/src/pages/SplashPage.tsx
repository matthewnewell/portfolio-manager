import { AppHeader } from '@conways/drawer'
import './SplashPage.css'

export default function SplashPage() {
  return (
    <div className="splash">
      <AppHeader brand={<span className="ch-brand">Portfolio Manager</span>} />
      <div className="splash__content">
        <span className="splash__badge">Not built yet</span>
        <h1>Portfolio Manager</h1>
        <p className="splash__tag">Every project in a business area, at once</p>
        <p>The oversight view a business area lead uses to see all of their projects together.</p>
        <p className="splash__area">ISO/IEC/IEEE 15288 Organizational Project-Enabling: Portfolio Management (6.2.3)</p>
        <p className="splash__note">
          This is a placeholder page so Conway&rsquo;s Depot&rsquo;s catalog can launch it. The real
          application is still to come.
        </p>
      </div>
    </div>
  )
}
