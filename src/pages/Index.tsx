import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const quickAmounts = [100, 500, 1000, 2500, 5000, 10000];
  const stats = [
    { icon: 'Users', value: '50,000+', label: 'Активных игроков' },
    { icon: 'Zap', value: '99.9%', label: 'Время работы' },
    { icon: 'Shield', value: '24/7', label: 'Поддержка' },
    { icon: 'CreditCard', value: '15сек', label: 'Скорость платежа' }
  ];

  const features = [
    { icon: 'Zap', title: 'Мгновенное зачисление', desc: 'Баланс пополняется за 15 секунд' },
    { icon: 'Shield', title: 'Безопасные платежи', desc: 'SSL защита и проверенные платёжные системы' },
    { icon: 'Gamepad2', title: 'Игровая валюта', desc: 'Покупка предметов, улучшений и бустеров' },
    { icon: 'Gift', title: 'Бонусы', desc: 'Дополнительная валюта за пополнение от 1000₽' }
  ];

  const handleAmountSelect = (value: number) => {
    setSelectedAmount(value);
    setAmount(value.toString());
  };

  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      {/* Header */}
      <header className="border-b border-gaming-gray">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-gaming-orange">
                <Icon name="Gamepad2" size={32} className="inline mr-2" />
                GAMING BALANCE
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-gaming-cyan text-black">
                <Icon name="Wallet" size={16} className="mr-1" />
                0 ₽
              </Badge>
              <Button variant="outline" size="sm" className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-black">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gaming-orange">ПОПОЛНИ</span>
              <br />
              <span className="text-gaming-cyan">БАЛАНС</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Мгновенное пополнение игрового баланса прямо на карту. Без комиссий, быстро и безопасно.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-gaming-orange hover:bg-gaming-orange/90 text-black font-bold px-8 py-4 text-lg animate-glow"
              >
                <Icon name="CreditCard" size={24} className="mr-2" />
                Пополнить сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gaming-darker">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <Icon name={stat.icon as any} size={48} className="text-gaming-cyan" />
                </div>
                <div className="text-3xl font-bold text-gaming-orange mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Balance Top-up Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-gaming-gray border-gaming-orange/30 animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gaming-orange mb-2">Пополнение баланса</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Выберите сумму или введите свою
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quick amounts */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Быстрый выбор</label>
                <div className="grid grid-cols-3 gap-3">
                  {quickAmounts.map((value) => (
                    <Button
                      key={value}
                      variant={selectedAmount === value ? "default" : "outline"}
                      className={`${
                        selectedAmount === value 
                          ? 'bg-gaming-orange text-black hover:bg-gaming-orange/90' 
                          : 'border-gaming-gray hover:border-gaming-orange text-gray-300 hover:text-gaming-orange'
                      } transition-all duration-200`}
                      onClick={() => handleAmountSelect(value)}
                    >
                      {value.toLocaleString()} ₽
                    </Button>
                  ))}
                </div>
              </div>

              {/* Custom amount */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Или введите сумму</label>
                <Input
                  type="number"
                  placeholder="Введите сумму"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="bg-gaming-dark border-gaming-gray text-white placeholder-gray-500 focus:border-gaming-orange"
                />
              </div>

              {/* Payment button */}
              <Button 
                size="lg" 
                className="w-full bg-gaming-cyan hover:bg-gaming-cyan/90 text-black font-bold py-4 text-lg"
                disabled={!amount}
              >
                <Icon name="CreditCard" size={24} className="mr-2" />
                Пополнить на {amount ? Number(amount).toLocaleString() : '0'} ₽
              </Button>

              {/* Payment methods */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-400 mb-3">Принимаем к оплате</p>
                <div className="flex justify-center space-x-4">
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    <Icon name="CreditCard" size={16} className="mr-1" />
                    Visa
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    <Icon name="CreditCard" size={16} className="mr-1" />
                    MasterCard
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    <Icon name="Wallet" size={16} className="mr-1" />
                    СБП
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gaming-darker">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gaming-cyan">Почему выбирают</span> <span className="text-gaming-orange">нас?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gaming-gray border-gaming-orange/20 hover:border-gaming-orange/50 transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Icon name={feature.icon as any} size={48} className="text-gaming-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gaming-gray py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Icon name="Gamepad2" size={24} className="text-gaming-orange" />
            <span className="text-xl font-bold">GAMING BALANCE</span>
          </div>
          <p className="text-gray-400 mb-4">
            Безопасное пополнение игрового баланса 24/7
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gaming-orange transition-colors">Условия использования</a>
            <a href="#" className="hover:text-gaming-orange transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gaming-orange transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;