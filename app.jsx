const { useState } = React;

function App() {
    // State variables for the application
    const [volume, setVolume] = useState('');
    const [workers, setWorkers] = useState('');
    const [hoursPerDay, setHoursPerDay] = useState('');
    const [days, setDays] = useState('');
    const [distance, setDistance] = useState('');
    const [isContingency, setIsContingency] = useState(false);
    const [ratePerKm, setRatePerKm] = useState('');

    const PPE = 150;
    const proportionerMaintenance = 300;
    const miscConsumables = 300;
    const overheadAllocation = 500;
    const mobCharge = 2200;

    // Calculations for each value
    const rawLbs = Number(volume) * 1.308 * 100;
    const lbsWithWaste = rawLbs * 1.12;
    const drumsNeeded = Math.ceil(lbsWithWaste / 1000);
    const materialCost = drumsNeeded * 2300;
    const siRevenue = rawLbs * 13;
    const labourCost = Number(workers) * Number(days) * Number(hoursPerDay) * 40 * 1.20;
    const hotelCost = Number(workers) * Number(days) * 200;
    const foodCost = Number(workers) * Number(days) * 75;
    const fuelCost = Number(distance) * 2 * Number(ratePerKm);
    const fixedCost = PPE + proportionerMaintenance + miscConsumables + overheadAllocation;
    const totalCost = materialCost + labourCost + hotelCost + foodCost + fuelCost + fixedCost;
    const contingencyPrice = (siRevenue + mobCharge) * 0.04;
    const subtotalContingent = siRevenue + mobCharge + contingencyPrice;
    const subtotalNonContingent = siRevenue + mobCharge;
    const gstContingent = subtotalContingent * 0.05;
    const gstNonContingent = subtotalNonContingent * 0.05;
    const grandTotalC = subtotalContingent + gstContingent;
    const grandTotalN = subtotalNonContingent + gstNonContingent;
    const subtotal = isContingency ? subtotalContingent : subtotalNonContingent;
    const margin = subtotal - totalCost;
    const marginPercent = subtotal ? margin / subtotal * 100 : 0;
    const fmt = (n) => n.toLocaleString('en-CA', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    return <div>
        <h1>Beyond Group Foam Bid Calculator</h1>

        <div>
            <h2>Job Details</h2>
            <table style={{borderCollapse: "collapse"}}>
                <tbody>
                    <tr>
                        <td style={{paddingRight: "16px", paddingBottom: "4px"}}>Volume (m³):</td>
                        <td style={{paddingBottom: "4px"}}><input type="number" value={volume} onChange={e => setVolume(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px", paddingBottom: "4px"}}>Workers:</td>
                        <td style={{paddingBottom: "4px"}}><input type="number" value={workers} onChange={e => setWorkers(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px", paddingBottom: "4px"}}>Hours per Day:</td>
                        <td style={{paddingBottom: "4px"}}><input type="number" value={hoursPerDay} onChange={e => setHoursPerDay(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px", paddingBottom: "4px"}}>Days:</td>
                        <td style={{paddingBottom: "4px"}}><input type="number" value={days} onChange={e => setDays(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px", paddingBottom: "4px"}}>Distance (km):</td>
                        <td style={{paddingBottom: "4px"}}><input type="number" value={distance} onChange={e => setDistance(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px", paddingBottom: "4px"}}>Fuel Rate ($/km):</td>
                        <td style={{paddingBottom: "4px"}}><input type="number" value={ratePerKm} onChange={e => setRatePerKm(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px", paddingBottom: "4px"}}>Deferred to next season?</td>
                        <td style={{paddingBottom: "4px"}}><input type="checkbox" checked={isContingency} onChange={e => setIsContingency(e.target.checked)} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div>
            <h2>Internal Cost Breakdown</h2>
            <table style={{borderCollapse: "collapse"}}>
                <tbody>
                    <tr>
                        <td style={{paddingRight: "16px"}}>Material:</td>
                        <td style={{textAlign: "right"}}>${fmt(materialCost)}</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}>Labour:</td>
                        <td style={{textAlign: "right"}}>${fmt(labourCost)}</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}>Fuel Cost:</td>
                        <td style={{textAlign: "right"}}>${fmt(fuelCost)}</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}>Worker Costs:</td>
                        <td style={{textAlign: "right"}}>${fmt(hotelCost + foodCost)}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <table style={{borderCollapse: "collapse", marginLeft: "16px"}}>
                                <tbody>
                                    <tr>
                                        <td style={{paddingRight: "16px"}}>Hotel:</td>
                                        <td style={{textAlign: "right"}}>${fmt(hotelCost)}</td>
                                    </tr>
                                    <tr>
                                        <td style={{paddingRight: "16px"}}>Food:</td>
                                        <td style={{textAlign: "right"}}>${fmt(foodCost)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}>Fixed Cost:</td>
                        <td style={{textAlign: "right"}}>${fmt(fixedCost)}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <table style={{borderCollapse: "collapse", marginLeft: "16px"}}>
                                <tbody>
                                    <tr>
                                        <td style={{paddingRight: "16px"}}>PPE:</td>
                                        <td style={{textAlign: "right"}}>${fmt(PPE)}</td>
                                    </tr>
                                    <tr>
                                        <td style={{paddingRight: "16px"}}>Maintenance:</td>
                                        <td style={{textAlign: "right"}}>${fmt(proportionerMaintenance)}</td>
                                    </tr>
                                    <tr>
                                        <td style={{paddingRight: "16px"}}>Misc:</td>
                                        <td style={{textAlign: "right"}}>${fmt(miscConsumables)}</td>
                                    </tr>
                                    <tr>
                                        <td style={{paddingRight: "16px"}}>Overhead:</td>
                                        <td style={{textAlign: "right"}}>${fmt(overheadAllocation)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px", borderBottom: "1px solid black", paddingBottom: "2px"}}></td>
                        <td style={{textAlign: "right", borderBottom: "1px solid black", paddingBottom: "2px"}}></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}><strong>Total Cost:</strong></td>
                        <td style={{textAlign: "right"}}><strong>${fmt(totalCost)}</strong></td>
                    </tr>
                    <tr style={{height: "16px"}}></tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}><strong>Gross Margin: </strong></td>
                        <td style={{textAlign: "right"}}>${fmt(subtotal)} - ${fmt(totalCost)} = <strong>${fmt(margin)}</strong></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}><strong>Margin Percent: </strong></td>
                        <td style={{textAlign: "right"}}>${fmt(margin)} / ${fmt(subtotal)} = <strong>${fmt(marginPercent.toFixed(2))}%</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <h2>Client Quote</h2>
            <table style={{borderCollapse: "collapse"}}>
                <tbody>
                    <tr>
                        <td style={{paddingRight: "16px"}}>Foam S&amp;I:</td>
                        <td style={{textAlign: "right"}}>${fmt(siRevenue)}</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}>Mobilization:</td>
                        <td style={{textAlign: "right"}}>${fmt(mobCharge)}</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}>Contingency:</td>
                        {isContingency ? (<td style={{textAlign: "right"}}>${fmt(contingencyPrice)}</td>
                        ) : (
                            <td style={{textAlign: "right"}}>N/A</td>
                        )}
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px", borderBottom: "1px solid black", paddingBottom: "2px"}}></td>
                        <td style={{textAlign: "right", borderBottom: "1px solid black", paddingBottom: "2px"}}></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}>Subtotal:</td>
                        {isContingency ? (
                            <td style={{textAlign: "right"}}>${fmt(subtotalContingent)}</td>
                        ) : (
                            <td style={{textAlign: "right"}}>${fmt(subtotalNonContingent)}</td>
                        )}
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}>GST (5%):</td>
                        {isContingency ? (
                            <td style={{textAlign: "right"}}>${fmt(gstContingent)}</td>
                        ) : (
                            <td style={{textAlign: "right"}}>${fmt(gstNonContingent)}</td>
                        )}
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px", borderBottom: "1px solid black", paddingBottom: "2px"}}></td>
                        <td style={{textAlign: "right", borderBottom: "1px solid black", paddingBottom: "2px"}}></td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: "16px"}}><strong>TOTAL:</strong></td>
                        {isContingency ? (
                            <td style={{textAlign: "right"}}><strong>${fmt(grandTotalC)}</strong></td>
                        ) : (
                            <td style={{textAlign: "right"}}><strong>${fmt(grandTotalN)}</strong></td>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}






ReactDOM.createRoot(document.querySelector('#root')).render(
    <App />
);