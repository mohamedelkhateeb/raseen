'use client';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { buyPlan, getPlans } from '@/services/companyService';
import { GrFormCheckmark } from 'react-icons/gr';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MPlan, YPlan } from '@/types/models/plans.model';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { SubscriptionCard } from './subscription-card';
export default function PlansViewPage({ plans, plan, profile }: any) {
  const [data, setData] = useState({
    package_id: '',
    type: '',
  });
  const years: YPlan[] = plans?.yearly_packages;
  const months: MPlan[] = plans?.monthly_packages;

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('package_id', data.package_id);
    formData.append('type', data.type);
    const res = await buyPlan(formData);
    console.log(res);
    if (res?.status) {
      toast.success('تم الاشتراك في الباقة بنجاح');
    } else {
      toast.error('حدث خطأ، حاول مرة اخرى');
    }
  };

  return !profile.package ? (
    <Tabs defaultValue="month" className="mt-10 max-h-full w-full p-3">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="year">سنوي</TabsTrigger>
        <TabsTrigger value="month">شهري</TabsTrigger>
      </TabsList>
      <RadioGroup onValueChange={(value) => setData({ ...data, package_id: value, type: 'month' })}>
        <TabsContent
          dir="rtl"
          value="month"
          className="grid max-h-[500px] grid-cols-1 gap-7 overflow-auto md:max-h-[400px] md:grid-cols-2 lg:grid-cols-3"
        >
          {months?.map((plan: MPlan) => (
            <Card key={plan?.id} className="p-5">
              <label htmlFor={plan?.id.toString()} className="h-full w-full cursor-pointer">
                <div className="flex justify-between">
                  <h1 className="text-2xl text-[#004267]">{plan?.price_month} ريال / شهر</h1>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="h-7 w-7" value={plan?.id.toString()} id={plan?.id.toString()} />
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  {plan?.details.map((detail: any) => (
                    <h1 key={detail?.id} className="text-md flex items-center gap-2 font-medium">
                      <GrFormCheckmark />
                      {detail?.desc_month}
                    </h1>
                  ))}
                </div>
              </label>
            </Card>
          ))}
        </TabsContent>
      </RadioGroup>
      <RadioGroup onValueChange={(value) => setData({ ...data, package_id: value, type: 'year' })}>
        <TabsContent
          dir="rtl"
          value="year"
          className="grid max-h-[500px] grid-cols-1 gap-7 overflow-auto md:max-h-[400px] md:grid-cols-2 lg:grid-cols-3"
        >
          {years?.map((plan: YPlan) => (
            <Card key={plan?.id} className="p-5">
              <label htmlFor={plan?.id.toString()} className="h-full w-full cursor-pointer">
                <div className="flex justify-between">
                  <h1 className="text-2xl text-[#004267]">{plan?.price_year} ريال / سنة</h1>
                  <div className="flex items-center space-x-2"></div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  {plan?.details.map((detail: any) => (
                    <h1 key={detail?.id} className="text-md flex items-center gap-2 font-medium">
                      <GrFormCheckmark />
                      {detail?.desc_year}
                    </h1>
                  ))}
                </div>
              </label>
            </Card>
          ))}
        </TabsContent>
      </RadioGroup>
      <form action={handleSubmit}>
        <LoadingButton content="اشتراك الآن" style="w-1/2 my-5" />
      </form>
    </Tabs>
  ) : (
    <SubscriptionCard {...plan} />
  );
}
